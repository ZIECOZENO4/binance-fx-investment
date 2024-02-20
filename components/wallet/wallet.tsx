import React from 'react'
import {User, Link} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider,  Image} from "@nextui-org/react";

const Wallet = () => {
  return (
    <div   className=' flex flex-col justify-center align-middle items-center'>
      <div    className=' flex flex-row justify-between gap-20 '>
<div   className=' flex flex-row justify-start align-middle items-start'>
<User 
  className=" text-2xl font-bold px-2 text-white"  
      name="ZIECO ZENO"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="lg" isExternal>
          ID: 123467ASD
          <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0b0b09"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z" fill="#0f33a9"></path> <path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z" fill="#0f33a9"></path> </g></svg>
          </div>
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
    />
</div>
<div   className=' flex flex-row justify-end align-middle items-end ml-4'>
<svg width="24px" height="24px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#2b2fa6" stroke="#2b2fa6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#000000"> </path> <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#000000"> </path> </g></svg>
</div>
      </div>
   <div>

<div   className='flex items-center justify-center flex-col w-full bg-slate-200'>
    <div   className='break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#5E17F4] text-white'>
        <span   className='uppercase text-xs text-[#D2BDFF]'>upgrade team</span>
        <div   className='flex flex-row items-center space-x-3'>
            <svg width='58' height='56' viewBox='0 0 52 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M32.6458 38.4379C33.9918 37.1198 33.2655 34.0922 31.0668 30.5948C31.8658 30.4707 32.6129 30.281 33.178 29.9905C35.2112 28.9466 36.584 27.044 37.6232 25.0759C38.7403 22.9647 39.49 20.644 40.9477 18.7215C41.1939 18.3966 41.44 18.1052 41.6853 17.831C44.8304 18.206 47.3412 18.8784 47.3412 18.8784L48.3006 16.4534C47.0896 16.0212 45.848 15.6791 44.586 15.4302C45.3591 14.9931 45.8635 14.8569 45.8635 14.8569L44.9543 12.4121C43.4966 13.025 42.3136 13.9293 41.323 15.0121C37.6206 14.806 33.8921 15.5397 30.9506 17.8086C28.7389 19.5155 27.2447 21.8819 25.839 24.2491C24.5935 23.0333 23.2671 21.9023 21.8688 20.8638C22.134 20.4302 22.4182 20.0405 22.7242 19.7397C24.5728 17.9293 27.0116 16.7716 28.6115 14.7C31.9742 10.35 29.5146 3.53103 26.7481 0C26.2524 0.475 25.4325 1.16724 24.8155 1.71379C27.7561 4.70948 29.8127 9.95431 27.5082 13.8733C26.2203 16.0638 23.8404 17.4379 22.1764 19.3198C21.8887 19.6466 21.6313 20.0603 21.3982 20.5172C17.0466 17.4129 13.053 16.1638 11.4704 17.7138C11.3133 17.8737 11.1838 18.0584 11.0874 18.2603L11.0813 18.2543L11.0388 18.3776C10.9799 18.5112 10.9261 18.65 10.8897 18.8017L0 50L31.774 38.95L31.7653 38.9414C32.1068 38.8319 32.4075 38.6707 32.6458 38.4379ZM6.32065 45.9759L3.66863 44.7465L5.45831 39.6172L13.6666 43.4207L6.32065 45.9759ZM21.0116 40.8664L7.24972 34.4879L9.0394 29.3595L19.3233 34.494C13.1847 30.5198 10.8291 24.2293 10.8291 24.2293L11.441 22.4767C12.5286 25.2138 14.9215 28.6224 18.2097 31.8397C21.5256 35.0862 25.0399 37.4379 27.8488 38.4888L21.0116 40.8664ZM26.2975 24.7112C27.7344 22.6621 29.2156 20.594 31.2748 19.1224C33.2352 17.7207 36.4176 17.4647 39.4345 17.6328C38.4153 19.4034 37.6622 21.3681 36.9861 23.2552C36.1689 25.5397 35.0734 27.9086 32.9847 29.3095C32.4214 29.6871 31.6318 29.9629 30.7886 30.1672C29.6298 28.4009 28.1097 26.5336 26.2975 24.7112Z' fill='white' />
            <path d='M18.2287 16.3793C19.0971 16.3793 16.4937 13.7931 16.9287 11.525C18.5962 11.3974 22.4078 12.1448 20.1892 9.11379C22.699 9.55345 23.9991 7.68966 21.6296 5.92328C22.4182 5.97845 23.6437 4.49914 22.764 4.31207C19.9456 3.7181 18.8423 5.23448 20.6312 7.42155C18.7505 7.07328 17.2173 7.9431 18.63 9.89655C13.1994 9.22328 16.2891 16.3793 18.2287 16.3793ZM36.8726 14.081C37.6864 13.7155 36.3058 11.3009 35.8569 10.6836C39.2915 10.3181 39.1615 9.3 37.0078 7.11897C42.8631 7.31466 37.1889 4.00431 37.9846 2.69397C38.6736 1.55776 40.7874 2.74914 40.5915 2.11638C39.9311 0 33.6668 1.43103 37.631 5.38276C34.1712 5.45 33.8393 6.575 36.4176 8.9069C31.9265 8.95603 35.5908 14.6552 36.8726 14.081ZM51.7378 22.6078C50.3667 22.9897 50.1553 22.8466 50.3381 24.2043C47.1713 22.7543 43.8207 20.7379 45.854 26.0802C42.2573 23.95 42.4367 25.8155 41.7641 28.8853C40.8888 28.2069 39.6451 26.419 39.6451 26.419L38.3278 27.5319C38.3278 27.5319 40.7414 30.9181 41.9331 30.7259C42.9809 30.5578 43.5512 28.5879 43.6093 26.8517C46.946 28.2526 48.5432 28.4397 47.017 24.3431C49.6846 25.8336 52.9555 27.1483 51.7378 22.6078ZM3.50916 7.27328L5.96011 9.71207L3.50916 12.15L1.05734 9.71207L3.50916 7.27328ZM24.1005 26.5181L21.6478 28.956L19.1959 26.5164L21.6486 24.0776L24.1005 26.5181ZM13.1908 3.44828L15.6417 5.88621L13.1899 8.32586L10.7389 5.88621L13.1908 3.44828ZM39.8765 37.4862L37.4238 35.0474L39.8748 32.6078L42.3275 35.0466L39.8765 37.4862ZM34.4113 45.85L31.9603 43.4121L34.4113 40.9733L36.8631 43.4121L34.4113 45.85ZM45.1649 47.7759L42.7123 45.3371L45.1623 42.8974L47.615 45.3362L45.1649 47.7759ZM47.6159 36.669L45.1649 34.2302L47.6159 31.7922L50.0668 34.2302L47.6159 36.669ZM43.5243 6.03448L45.9753 8.47241L43.5235 10.9112L41.0725 8.47241L43.5243 6.03448Z' fill='white' />
            </svg>
            <span   className='text-base font-medium'>Congratulations, your team has improved!</span>
        </div>
        <div   className='flex justify-between items-center'>
            <span>Modify your data</span>
            <button   className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black'>
            <span>Next step</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
    </div>
    <div   className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
        <div   className='flex items-center justify-between font-medium'>
            <span   className='uppercase text-xs text-green-500'>upgrade team</span>
            <span   className='text-xs text-slate-500'>#teamsdesigners</span>
        </div>
        <div   className='flex flex-row items-center space-x-3'>
            <div   className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                <line x1='3' y1='22' x2='21' y2='22' />
            </svg>
            </div>
            <span   className='text-base font-medium'>Upgrade your team for better performance</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div   className='flex justify-between items-center'>
            <div>
            <dt   className='sr-only'>Users</dt>
            <dd   className='flex justify-start -space-x-1.5'>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/women/46.jpg' alt='avatar' />
                </a>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/men/45.jpg' alt='avatar' />
                </a>
                <a href='#'   className='inline-block -m-1'>
                <img   className='w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800' src='https://randomuser.me/api/portraits/women/47.jpg' alt='avatar' />
                </a>
                <span   className='inline-block -m-1 rounded-full ring-2 ring-white dark:ring-slate-800'>
                <svg width='28' height='28' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg'   className='text-slate-200 dark:text-slate-600'>
                    <path d='M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM8.20879 15.5C8.20879 19.5268 11.4732 22.7912 15.5 22.7912C19.5268 22.7912 22.7912 19.5268 22.7912 15.5C22.7912 11.4732 19.5268 8.20879 15.5 8.20879C11.4732 8.20879 8.20879 11.4732 8.20879 15.5Z' fill='currentColor' />
                    <path d='M31 15.5C31 18.049 30.3714 20.5586 29.1698 22.8066C27.9682 25.0547 26.2307 26.9716 24.1113 28.3878C21.9919 29.8039 19.556 30.6755 17.0193 30.9254C14.4826 31.1752 11.9234 30.7956 9.56841 29.8201C7.21345 28.8447 5.1354 27.3035 3.51834 25.3331C1.90128 23.3627 0.795112 21.0239 0.297828 18.5239C-0.199455 16.0239 -0.0725081 13.4398 0.667425 11.0006C1.40736 8.56136 2.73744 6.34225 4.53984 4.53985L10.2876 10.2876C9.43046 11.1448 8.79791 12.2002 8.44602 13.3602C8.09413 14.5202 8.03376 15.7491 8.27025 16.9381C8.50675 18.127 9.03281 19.2393 9.80184 20.1764C10.5709 21.1134 11.5591 21.8464 12.6791 22.3103C13.799 22.7742 15.0161 22.9547 16.2225 22.8359C17.4289 22.7171 18.5874 22.3026 19.5953 21.6291C20.6033 20.9556 21.4295 20.0439 22.001 18.9748C22.5724 17.9058 22.8714 16.7122 22.8714 15.5H31Z' fill='#2BC86A' />
                </svg>
                </span>
            </dd>
            </div>
            <button   className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span>Submit</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
</div>
   </div>
    </div>
  )
}

export default Wallet