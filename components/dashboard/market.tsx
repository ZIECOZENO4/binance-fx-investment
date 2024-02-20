// // // 'use client'
// // // import { useEffect, useState } from 'react';

// // // // Define the shape of the data item
// // // interface CoinDataItem {
// // //   name: string;
// // //   current_price: number;
// // //   market_cap: number;
// // //   symbol: string;
// // //   image: string;
// // //   market_cap_rank: number;
// // //   high_24h: number;
// // //   low_24h: number;
// // //   price_change_24h: number;
// // //   market_cap_change_24h: number;
// // //   circulating_supply: number;
// // //   total_supply: number;
// // //   ath: number;
// // //   last_updated: string;
// // // }

// // // const Market = () => {
// // //   const [data1, setData1] = useState<CoinDataItem[] | null>(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
// // //       const options1 = {
// // //         method: 'GET',
// // //         headers: {
// // //           'Accept': 'application/json'
// // //         }
// // //       };

// // //       try {
// // //         const response1 = await fetch(url1, options1);
// // //         const result1: CoinDataItem[] = await response1.json();
// // //         setData1(result1);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <div className='text-white'>
// // //       {data1 && data1.map((item, index) => (
// // //         <div key={index}>
// // //           <h3>{item.name}</h3>
// // //           <p>Current Price: {item.current_price}</p>
// // //           <p>Market Cap: {item.market_cap}</p>
// // //           <p>Symbol: {item.symbol}</p>
// // //           <p>Image : {item.image}</p>
// // //           <p>Market Cap Rank: {item.market_cap_rank}</p>
// // //           <p>High  24h: {item.high_24h}</p>
// // //           <p>Low  24h: {item.low_24h}</p>
// // //           <p>Price Change  24h: {item.price_change_24h}</p>
// // //           <p>Market Cap Change  24h: {item.market_cap_change_24h}</p>
// // //           <p>Circulating Supply: {item.circulating_supply}</p>
// // //           <p>Total Supply: {item.total_supply}</p>
// // //           <p>ATH: {item.ath}</p>
// // //           <p>Last Updated: {item.last_updated}</p>
// // //           <hr />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Market;

// // 'use client'

// // // import { ForwardTable } from 'antd';

// // const columns = [
// //   { title: 'Name', dataIndex: 'name' },
// //   { title: 'Age', dataIndex: 'age' },
// //   { title: 'Address', dataIndex: 'address' },
// // ];

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Collapse from '@mui/material/Collapse';
// // import IconButton from '@mui/material/IconButton';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper';



// // function createData(
 
//   // name: string,
//   // current_price: number,
//   // market_cap: number,
//   // symbol: string,
//   // image: string,
//   // market_cap_rank: number,
//   // high_24h: number,
//   // low_24h: number,
//   // price_change_24h: number,
//   // market_cap_change_24h: number,
//   // circulating_supply: number,
//   // total_supply: number,
//   // ath: number,
//   // last_updated: string,
// // ) {
// //   return {
// //     name,
// //     current_price,
// //     market_cap,
// //     symbol,
// //     image,
// //     market_cap_rank,
// //     high_24h,
// //     low_24h,
// //     price_change_24h,
// //     market_cap_change_24h,
// //     circulating_supply,
// //     total_supply,
// //     ath,
// //     last_updated,
// //     history: [
// //       {
// //         date: '2020-01-05',
// //         customerId: '11091700',
// //         amount: 3,
// //       },
// //       {
// //         date: '2020-01-02',
// //         customerId: 'Anonymous',
// //         amount: 1,
// //       },
// //     ],
// //   };
// // }

// // function Row(props: { row: ReturnType<typeof createData> }) {
// //   const { row } = props;
// //   const [open, setOpen] = React.useState(false);

// //   return (
// //     <React.Fragment>
// //       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
// //         <TableCell>
// //           <IconButton
// //             aria-label="expand row"
// //             size="small"
// //             onClick={() => setOpen(!open)}
// //           >
// //             {open ?
// //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
// //   <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
// // </svg>
// //  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
// //  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z" clipRule="evenodd" />
// // </svg>
// // }
// //           </IconButton>
// //         </TableCell>
//       //   <TableCell component="th" scope="row">
//       //     {row.image}
//       //   </TableCell>
//       //   <TableCell align="center">{row.name}</TableCell>
//       //   <TableCell align="center">{row.current_price}</TableCell>
//       //   <TableCell align="center">{row.market_cap}</TableCell>
//       //   <TableCell align="center">{row.symbol}</TableCell>
//       //   <TableCell align="center">
//       //     {row. market_cap_rank}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.high_24h}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.low_24h}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.market_cap_change_24h}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.circulating_supply}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.total_supply}
//       //   </TableCell>
//       //   <TableCell align="center">
//       //     {row.ath}
//       //   </TableCell>
//       // </TableRow>
//       // <TableRow>
// //         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
// //           <Collapse in={open} timeout="auto" unmountOnExit>
// //             <Box sx={{ margin: 1 }}>
// //               <Typography variant="h6" gutterBottom component="div">
// //                 PREDICTIONS
// //               </Typography>
// //               <Table size="small" aria-label="purchases">
// //                 <TableHead>
// //                   <TableRow>
// //                     <TableCell>Date</TableCell>
// //                     <TableCell>Customer</TableCell>
// //                     <TableCell align="center">Amount</TableCell>
// //                     <TableCell align="center">Total price ($)</TableCell>
// //                   </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                   {row.history.map((historyRow) => (
// //                     <TableRow key={historyRow.date}>
// //                       <TableCell component="th" scope="row">
// //                         {historyRow.date}
// //                       </TableCell>
// //                       <TableCell>{historyRow.customerId}</TableCell>
// //                       <TableCell align="center">{historyRow.amount}</TableCell>
// //                       <TableCell align="center">
// //                         {historyRow.amount}
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </Box>
// //           </Collapse>
// //         </TableCell>
// //       </TableRow>
// //     </React.Fragment>
// //   );
// // }

// // const rows = [
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData(  'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData(  'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData( 'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// //   createData(  'Arsenal',  6.0, 24, 'HFRVJ','EUVH', 1,7,678,9,19,78, 90, 9,'low'),
// // ];

// // export default function Market() {
// //   return (
// //     <div>
// //       <h1 className=' md:ml-[5rem] p-5 justify-start flex font-heading text-xl md:text-3xl '>SELECT LEAGUE</h1>
// //     <TableContainer component={Paper} className=' '>
// //       <Table aria-label="collapsible table">
// //         <TableHead className=' '>
// //           <TableRow>
// //             <TableCell />
// //             <TableCell>COIN</TableCell>
// //             <TableCell align="center">NAME</TableCell>
// //             <TableCell align="center">CURRENT PRICE</TableCell>
// //             <TableCell align="center">MARKET CAP</TableCell>
// //             <TableCell align="center">SYMBOL</TableCell>
// //             <TableCell align="center">MARKET RANK</TableCell>
// //             <TableCell align="center">HIGH</TableCell>
// //               <TableCell align="center">LOW</TableCell>
// //                 <TableCell align="center">PRICE CHANGE</TableCell>
// //                 <TableCell align="center">MARKET CHANGE</TableCell>
// //                 <TableCell align="center">CIRCULATING SUPPLY</TableCell>
// //                 <TableCell align="center">TOTAL SUPPLY</TableCell>
// //                 <TableCell align="center">AUTH</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <Row key={row.image} row={row} />
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //     </div>
// //   );
// // }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import { useEffect, useState } from 'react';

// // Define the shape of the data item
// interface CoinDataItem {
//   name: string;
//   current_price: number;
//   market_cap: number;
//   symbol: string;
//   image: string;
//   market_cap_rank: number;
//   high_24h: number;
//   low_24h: number;
//   price_change_24h: number;
//   market_cap_change_24h: number;
//   circulating_supply: number;
//   total_supply: number;
//   ath: number;
//   last_updated: string;
// }
// interface RowProps {
//   row: CoinDataItem;
// }

// // Helper function to create data objects
// function createData(
//   name: string,
//   current_price: number,
//   market_cap: number,
//   symbol: string,
//   image: string,
//   market_cap_rank: number,
//   high_24h: number,
//   low_24h: number,
//   price_change_24h: number,
//   market_cap_change_24h: number,
//   circulating_supply: number,
//   total_supply: number,
//   ath: number,
//   last_updated: string,
// ) {
//   return {
//     name,
//     current_price,
//     market_cap,
//     symbol,
//     image,
//     market_cap_rank,
//     high_24h,
//     low_24h,
//     price_change_24h,
//     market_cap_change_24h,
//     circulating_supply,
//     total_supply,
//     ath,
//     last_updated,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }
// const Row: React.FC<RowProps> = ({ row }) => {
//   // Make sure to return a valid JSX element, such as a TableRow
//   return (
//     <TableRow>
//  <TableCell component="th" scope="row" className=" uppercase">
//           <img src={row.image} alt="name of coin" className=' h-6 w-6' />
//         </TableCell>
//         <TableCell align="center">{row.name}</TableCell>
//         <TableCell align="center">{row.current_price}</TableCell>
//         <TableCell align="center">{row.market_cap}</TableCell>
//         <TableCell align="center">{row.symbol}</TableCell>
//         <TableCell align="center">
//           {row.market_cap_rank}
//         </TableCell>
//         <TableCell align="center">
//           {row.high_24h}
//         </TableCell>
//         <TableCell align="center">
//           {row.low_24h}
//         </TableCell>
//         <TableCell align="center">
//           {row.market_cap_change_24h}
//         </TableCell>
//         <TableCell align="center">
//           {row.circulating_supply}
//         </TableCell>
//         <TableCell align="center">
//           {row.total_supply}
//         </TableCell>
//       </TableRow>
//   );
// };

// export default function Market() {
//   const [data1, setData1] = useState<CoinDataItem[] | null>(null);


//   useEffect(() => {
//     const fetchData = async () => {
//       const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
//       const options1 = {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json'
//         }
//       };

//       try {
//         const response1 = await fetch(url1, options1);
//         const result1: CoinDataItem[] = await response1.json();
//         setData1(result1);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table aria-label="collapsible table">
//           <TableHead>
//          <TableRow>
//    <TableCell />
//       <TableCell>COIN</TableCell>
//       <TableCell align="center">CURRENT PRICE</TableCell>
//       <TableCell align="center">MARKET CAP</TableCell>
//       <TableCell align="center">SYMBOL</TableCell>
//       <TableCell align="center">MARKET RANK</TableCell>
//             <TableCell align="center">HIGH</TableCell>
//     <TableCell align="center">LOW</TableCell>
//       <TableCell align="center">PRICE CHANGE</TableCell>
//               <TableCell align="center">MARKET CHANGE</TableCell>
//             <TableCell align="center">CIRCULATING SUPPLY</TableCell>
//        <TableCell align="center">TOTAL SUPPLY</TableCell>  
//        <TableCell align="center"></TableCell>       </TableRow>
//           </TableHead>
//           <TableBody>
//             {data1?.map((item) => (
//               <Row key={item.name} row={item} />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

"use client"
import React, { useEffect } from 'react';

const TradingViewScreenerWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "500%",
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "dark",
      "locale": "en"
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
 
      </div>
    </div>
  );
};

export default TradingViewScreenerWidget;
