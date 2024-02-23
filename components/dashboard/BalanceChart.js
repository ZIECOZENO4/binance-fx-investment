'use client'
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import BalanceShow from './balanceshow'
import Assets from './assets'
import Options from './options'
import Table from "./table"
import Calendar from "./calendar"
import NewMembers from "./newmembers"
const data = {
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Noz',
    'Dec',
    'Jan',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3773f5',
      borderColor: '#3773f5',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const BalanceChart = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <div className=' flex px-[1vw] md:w-[53vw] w-[100vw] flex-col  overflow-x-hidden'>
      <div className="  justify-between md:p-6 mx-2 py-6 flex flex-row">
      <SignedIn>
        <UserButton/>
        { isSignedIn && <div className="font-serif flex text-header text-xl  md:text-2xl font-bold font-sans gap-3 text-white uppercase"> INVESTOR  { user && user.firstName ? user.firstName  : user ? user.username : "FX User "}
</div> }
              </SignedIn>
      <SignedOut>
      <img src='/images/bf.png' alt='user imag' className=' h-10 w-10 rounded-full object-cover align-middle justify-start'/>
      <p className=' text-2xl font-bold font-serif gap-3 text-white'> FX INVESTOR</p>
      </SignedOut>
      <div className=" flex p-2 justify-between align-middle flex-row gap-3">
      <svg fill="white" width="20px" height="20px" viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4,4h6v6H4V4M20,4v6H14V4h6M14,15h2V13H14V11h2v2h2V11h2v2H18v2h2v3H18v2H16V18H13v2H11V16h3V15m2,0v3h2V15H16M4,20V14h6v6H4M6,6V8H8V6H6M16,6V8h2V6H16M6,16v2H8V16H6M4,11H6v2H4V11m5,0h4v4H11V13H9V11m2-5h2v4H11V6M2,2V6H0V2A2,2,0,0,1,2,0H6V2H2M22,0a2,2,0,0,1,2,2V6H22V2H18V0h4M2,18v4H6v2H2a2,2,0,0,1-2-2V18H2m20,4V18h2v4a2,2,0,0,1-2,2H18V22Z"></path> </g></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>

<svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.91,31.8V26.1a19.09,19.09,0,0,1,38.18,0v5.7" stroke-linecap="round"></path><path d="M12.06,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,12.06,31.8Z" stroke-linecap="round"></path><path d="M50.24,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,50.24,31.8Z" transform="translate(102.18 76.98) rotate(180)" stroke-linecap="round"></path><path d="M51.7,45.56v5a4,4,0,0,1-4,4H36.56" stroke-linecap="round"></path><rect x="28.45" y="51.92" width="8.1" height="5.07" rx="2" stroke-linecap="round"></rect></g></svg>
      </div>
      </div>
      <BalanceShow />
      <Options />
      <Assets />
      <NewMembers />
      <Calendar />
      <p className='font-bold md:text-4xl text-2xl align-middle justify-center text-white p-5 pt-8'>Your Assets Progress</p>
      <Line data={data} options={options} width={400} height={150} />
  
      <Table />
    </div>
  )
}

export default BalanceChart


