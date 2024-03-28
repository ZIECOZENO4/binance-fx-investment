// "use client"
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { CoinList } from "../../config/api";
// import { CryptoState } from "../../CryptoContext";

// export function numberWithCommas(x) {
//  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
//  const pageNumbers = [];

//  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//  }

//  return (
//     <nav>
//       <ul className="inline-flex -space-x-px">
//         {pageNumbers.map(number => (
//           <li key={number} className="px-4 py-2 border-gray-300 border">
//             <a
//               onClick={() => paginate(number)}
//               href="#!"
//               className={`block py-2 px-3 leading-tight ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} cursor-pointer`}
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//  );
// }

// export default function CoinsTable() {
//  const [coins, setCoins] = useState([]);
//  const [loading, setLoading] = useState(false);
//  const [search, setSearch] = useState("");
//  const [currentPage, setCurrentPage] = useState(1);
//  const [coinsPerPage] = useState(10); // Adjust number of items per page as needed

//  const { currency, symbol } = CryptoState();

//  const fetchCoins = async () => {
//     setLoading(true);
//     const { data } = await axios.get(CoinList(currency));
//     // Assuming `data` is the object you're trying to destructure
//     const { currency } = data ?? {}; // Provide an empty object as a fallback

//     // Now, `currency` will be `undefined` if `data` is `undefined`, and you can safely use it
//     setCoins(data);
//     setLoading(false);
//  };

//  useEffect(() => {
//     fetchCoins();
//  }, [currency]);

//  const handleSearch = () => {
//     return coins.filter(
//       (coin) =>
//         coin.name.toLowerCase().includes(search.toLowerCase()) ||
//         coin.symbol.toLowerCase().includes(search.toLowerCase())
//     );
//  };

//  // Get current coins
//  const indexOfLastCoin = currentPage * coinsPerPage;
//  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
//  const currentCoins = handleSearch().slice(indexOfFirstCoin, indexOfLastCoin);

//  // Change page
//  const paginate = pageNumber => setCurrentPage(pageNumber);

//  return (
//     <div className="text-center dark:bg-gray-800">
//      <h4 className="text-2xl font-bold my-4 text-gray-200">Binance FX Trading</h4>
//       <input
//         className="mb-5 p-2 w-full border rounded border-gray-300"
//         placeholder="Search For a Crypto Currency.."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {loading ? (
//         <div className="bg-sky-600 p-4">Loading...</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full">
//             <thead className="bg-sky-600 text-black">
//               <tr>
//                 {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
//                  <th key={head} className="px-4 py-2">{head}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentCoins.map((row) => { // Corrected to use currentCoins
//                 const profit = row.price_change_percentage_24h > 0;
//                 return (
//                  <tr
//                     key={row.name}
//                     className="bg-gray-700 text-gray-200 cursor-pointer hover:bg-gray-600"

//                  >
//                     <td className="px-4 py-2 flex items-center gap-4">
//                       <img src={row?.image} alt={row.name} height="50" className="w-12 h-12" />
//                       <div>
//                         <p className="uppercase font-bold">{row.symbol}</p>
//                         <p className="text-sm text-gray-400">{row.name}</p>
//                       </div>
//                     </td>
//                     <td className="px-4 py-2 text-right">
//                       {symbol} {numberWithCommas(row.current_price.toFixed(2))}
//                     </td>
//                     <td className={`px-4 py-2 text-right ${profit ? 'text-green-500' : 'text-red-500'}`}>
//                       {profit && "+"}
//                       {row.price_change_percentage_24h.toFixed(2)}%
//                     </td>
//                     <td className="px-4 py-2 text-right">
//                       {symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
//                     </td>
//                  </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <div   className=" mt-2 overflow-x-auto">
//       <Pagination
//         itemsPerPage={coinsPerPage}
//         totalItems={handleSearch().length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//       </div>
//     </div>
//  );
// }

"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div>
      <div>
        <h1

        >
          Cryptocurrency Prices by Market Cap
        </h1>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                   
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </div>
    </div>
  );
}
