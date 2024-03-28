declare module 'file-saver';


declare global {
    interface Window {
       onTradingViewRowClick: (symbol: string) => void;
    }
   }