import React from 'react'
import {User, Link} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider,  Image} from "@nextui-org/react";

const Wallet = () => {
  return (
    <div className=' flex flex-col justify-center align-middle items-center'>
      <div  className=' flex flex-row justify-between align-middle items-center'>
<div className=' flex flex-row justify-start align-middle items-center'>
<User   
      name="ZIECO ZENO"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="md" isExternal>
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
<div className=' flex flex-row justify-end align-middle items-center'>
<svg width="24px" height="24px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#2b2fa6" stroke="#2b2fa6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#000000"> </path> <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#000000"> </path> </g></svg>
</div>
      </div>
      <div>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      <svg fill="#41359c" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21 c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4 C27.4,16,27.7,15.9,28,15.8z"></path> <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5 c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z"></path> <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z"></path> </g> </g></svg>
        <div className="flex flex-col">
          <p className="text-2xl font-bold ">MY WALLET</p>
          <p className="text-small text-default-500">Level 1</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
      </div>
    </div>
  )
}

export default Wallet