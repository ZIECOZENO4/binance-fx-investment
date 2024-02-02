const Banner = () => (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-30"></div>
      </div>
      <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-30"></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Binance FX 2023</strong> Join Our Binance FX Crypto Empowerment Program, our promo will be from April 9-29
        </p>
        <a href="https://cryptobitcoinwebapp.vercel.app/" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Register now <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="p-3 focus:outline-none">
          <span className="sr-only">Dismiss</span>
          <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
  export default Banner;
  