
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

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
  return (
    <div>
      <div className=" w-full justify-between p-2 flex-row">
      <img src='/images/bf.png' alt='user imag' className=' h-10 w-10 rounded-full object-cover align-middle justify-start'/>
      <p className=' text-2xl font-bold font-sans gap-3'> user name </p>
      <div className=" flex p-2 justify-between align-middle flex-row ">
  


      <svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4,4h6v6H4V4M20,4v6H14V4h6M14,15h2V13H14V11h2v2h2V11h2v2H18v2h2v3H18v2H16V18H13v2H11V16h3V15m2,0v3h2V15H16M4,20V14h6v6H4M6,6V8H8V6H6M16,6V8h2V6H16M6,16v2H8V16H6M4,11H6v2H4V11m5,0h4v4H11V13H9V11m2-5h2v4H11V6M2,2V6H0V2A2,2,0,0,1,2,0H6V2H2M22,0a2,2,0,0,1,2,2V6H22V2H18V0h4M2,18v4H6v2H2a2,2,0,0,1-2-2V18H2m20,4V18h2v4a2,2,0,0,1-2,2H18V22Z"></path> </g></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>

      </div>
      </div>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  )
}

export default BalanceChart


