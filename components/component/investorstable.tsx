"use client"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

type OutInvest = {
  id: string;
  time: string;
  walletAddress: string;
  userId: string;
  user: {
     id: string;
     name: string;
  };
  outCoin: string;
  outAmount: string;
  confirmed: boolean; 
  gasFee: string;
  totalValueInUSDT: string;
 };
 
 type OutInvestData = OutInvest[];
const AllInvestorsTalble : React.FC = () => {
 const [outInvestments, setOutInvestments] = useState<OutInvestData>([]);
 const [search, setSearch] = useState("");
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage] = useState(20);
 const [filteredData, setFilteredData] = useState<OutInvestData>([]);

 const fetchData = async () => {
    try {
      const response = await fetch('/api/historyWithdraw', {
        cache: 'no-store', // Disable caching
      });
      const data: OutInvestData = await response.json();
      setOutInvestments(data);
      setFilteredData(data); // Initialize filtered data with all data
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("An error occurred while fetching the data. Please try again!", {
        position: "top-right",
      });
    }
 };

 useEffect(() => {
    fetchData(); 
 }, []);

 const handleSearch = () => {
    // Filter data based on search
    const results = outInvestments.filter(item =>
      item.user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(results); // Update the state with the filtered results
 };

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

 const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto items-center justify-center">
          <img
            alt="BinanceFX Investors"
            className="aspect-[3/1] overflow-hidden rounded-lg object-cover"
            height="400"
            src="/images/a13.jpeg"
            width="1200"
          />
          <div className="grid gap-1">
            <h1 className="text-blue-500 font-bold tracking-tight">BinanceFX Investors</h1>
            <p className="text-gray-500 dark:text-gray-400">
              List of Investors in BinanceFX: Manage your Investments with Ease
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border">
          <div className="flex gap-2 items-center bg-[#0d1117] p-4">
      <Input
        className="flex-1 min-w-[200px] text-gray-500 dark:text-gray-400"
        placeholder="Search Investors"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button size="sm" onClick={handleSearch}>Search</Button>
    </div>
            <div className="grid gap-2 p-4">
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                <svg
className="w-4 h-4 fill-current" 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
                  <Label className="unstyled" htmlFor="investment">
                    Total Investment
                  </Label>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <div className="w-full max-w-[200px] text-center" />
                  <span className="mx-2">to</span>
                  <div className="w-full max-w-[200px] text-center" />
                </div>
              </div>
              <Slider id="investment" max={100000} min={0} step={1000} />
            </div>
            <div className="flex items-center justify-end gap-2 border-t p-4">
              <Button className="shrink-0" variant="outline">
                Reset
              </Button>
              <Button>Apply Filters</Button>
            </div>
          </div>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Investor</TableHead>
                  <TableHead className="w-[150px]">Date of Withdrawal</TableHead>
                  <TableHead className="w-[150px]">Level</TableHead>
                  <TableHead className="w-[150px]">Amount</TableHead>
                  <TableHead className="w-[150px]">Coin</TableHead>
                  <TableHead className="w-[150px]">USDT Value</TableHead>
                  <TableHead className="w-[150px]">Fee</TableHead>
                  <TableHead className="w-[150px]">Confirmed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {currentItems.map((outInvest, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{outInvest.user.name}</TableCell>
                  <TableCell>{new Date(outInvest.time).toLocaleString()}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>{outInvest.outAmount}</TableCell>
                  <TableCell>{outInvest.outCoin}</TableCell>
                  <TableCell>{outInvest.totalValueInUSDT}</TableCell>
                  <TableCell>{outInvest.gasFee}</TableCell>
                  <TableCell className=' text-green-600'>Successful</TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
                   ))}
              </TableBody>
            </Table>
          </div>
          <div>
      <nav>
        <ul className='pagination justify-content-center'>
          {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(number => (
            <li key={number + 1} className='page-item'>
              <a onClick={() => paginate(number + 1)} className='page-link' href='#'>
                {number + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
        </div>
      </div>
    </div>
  )
}

export default  AllInvestorsTalble;