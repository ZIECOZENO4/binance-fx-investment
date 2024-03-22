"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../../config/api";
import { useRouter } from "next/navigation"; 
import { CryptoState } from "../../CryptoContext";

export function numberWithCommas(x) {
 return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
 const pageNumbers = [];

 for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
 }

 return (
    <nav>
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map(number => (
          <li key={number} className="px-4 py-2 border-gray-300 border">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className={`block py-2 px-3 leading-tight ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} cursor-pointer`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
 );
}

export default function CoinsTable() {
 const [coins, setCoins] = useState([]);
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState("");
 const [currentPage, setCurrentPage] = useState(1);
 const [coinsPerPage] = useState(10); // Adjust number of items per page as needed

 const { currency, symbol } = CryptoState();
 const router = useRouter(); // Use the standard Next.js router

 const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
 };

 useEffect(() => {
    fetchCoins();
 }, [currency]);

 const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
 };

 // Get current coins
 const indexOfLastCoin = currentPage * coinsPerPage;
 const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
 const currentCoins = handleSearch().slice(indexOfFirstCoin, indexOfLastCoin);

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);

 return (
    <div className="text-center dark:bg-gray-800">
     <h4 className="text-2xl font-bold my-4 text-gray-200">Binance FX Trading</h4>
      <input
        className="mb-5 p-2 w-full border rounded border-gray-300"
        placeholder="Search For a Crypto Currency.."
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <div className="bg-yellow-400 p-4">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-yellow-500 text-black">
              <tr>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                 <th key={head} className="px-4 py-2">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentCoins.map((row) => { // Corrected to use currentCoins
                const profit = row.price_change_percentage_24h > 0;
                return (
                 <tr
                    key={row.name}
                    className="bg-gray-700 text-gray-200 cursor-pointer hover:bg-gray-600"
                    onClick={() => router.push(`/dashboard/trade/tradePage/${row.id}`)}
                 >
                    <td className="px-4 py-2 flex items-center gap-4">
                      <img src={row?.image} alt={row.name} height="50" className="w-12 h-12" />
                      <div>
                        <p className="uppercase font-bold">{row.symbol}</p>
                        <p className="text-sm text-gray-400">{row.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right">
                      {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                    </td>
                    <td className={`px-4 py-2 text-right ${profit ? 'text-green-500' : 'text-red-500'}`}>
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="px-4 py-2 text-right">
                      {symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                    </td>
                 </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div   className=" mt-2 overflow-x-auto">
      <Pagination
        itemsPerPage={coinsPerPage}
        totalItems={handleSearch().length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </div>
    </div>
 );
}
