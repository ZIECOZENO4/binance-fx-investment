"use client";
import Image from "next/image";
import ConnectButton from "./connectbutton";
import Search from "../public/assets/svg/search";
import { useState } from "react";
import AccoutDropdown from "./Investdropdown";

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  headerWrapper: `flex justify-between h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded `,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const showDropdown = (itemKey: string) => {
    setHoveredItem(itemKey);
  };

  const hideDropdown = () => {
    setHoveredItem(null);
  };

  return (
    <div className='md:bg-[#17171A] hidden md:text-white md:h-20 md:flex md:gap-[100px] w-full md:p-[20px] md:sticky md:top-0 md:z-10 md:fixed'>
      <div className="flex flex-row justify-between align-middle items-center">
        <Image alt="" src="/images/bf.png" width={70} height={70} />
        <p className="text-blue-500 font-sono">BINANCE FX</p>
      </div>

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          {/* Invest Dropdown */}
          <div
            onMouseEnter={() => showDropdown('invest')}
            onMouseLeave={hideDropdown}
            className="relative inline-block text-left"
          >
            <div className={styles.navItem}>
              <div className={styles.navLink}>Invest</div>
              <div className={styles.badge} />
            </div>
            {hoveredItem === 'invest' && (
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white text-white z-50">
                <AccoutDropdown />
              </div>
            )}
          </div>

          {/* NFT Dropdown */}
          <div
            onMouseEnter={() => showDropdown('nft')}
            onMouseLeave={hideDropdown}
            className="relative inline-block text-left"
          >
            <div className={styles.navItem}>
              <div className={styles.navLink}>NFT</div>
              <div className={styles.badge} />
            </div>
            {hoveredItem === 'nft' && (
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white text-white z-50">
                <AccoutDropdown />
              </div>
            )}
          </div>

          {/* Trade Dropdown */}
          <div
            onMouseEnter={() => showDropdown('trade')}
            onMouseLeave={hideDropdown}
            className="relative inline-block text-left"
          >
            <div className={styles.navItem}>
              <div className={styles.navLink}>Trade</div>
              <div className={styles.badge} />
            </div>
            {hoveredItem === 'trade' && (
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white text-white z-50">
                <AccoutDropdown />
              </div>
            )}
          </div>

          {/* Other nav items without dropdowns */}
          <div className={styles.navItem}>
            <div className={styles.navLink}>Affiliates</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>
          </div>

          {/* Features Dropdown */}
          <div
            onMouseEnter={() => showDropdown('features')}
            onMouseLeave={hideDropdown}
            className="relative inline-block text-left"
          >
            <div className={styles.navItem}>
              <div className={styles.navLink}>Features</div>
              <div className={styles.badge} />
            </div>
            {hoveredItem === 'features' && (
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white text-white z-50">
                <AccoutDropdown />
              </div>
            )}
          </div>

          {/* Exchanges Dropdown */}
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>

          {/* More Dropdown */}
          <div
            onMouseEnter={() => showDropdown('more')}
            onMouseLeave={hideDropdown}
            className="relative inline-block text-left"
          >
            <div className={styles.navItem}>
              <div className={styles.navLink}>More</div>
              <div className={styles.badge} />
            </div>
            {hoveredItem === 'more' && (
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white text-white z-50">
                <AccoutDropdown />
              </div>
            )}
          </div>
        </nav>
        <div className={styles.inputContainer}>
          <Search />
          {/* <input className={styles.input} placeholder='Search' /> */}
        </div>
        <div className="flex items-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;