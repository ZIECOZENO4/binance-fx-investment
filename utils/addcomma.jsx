// utils/formatBalance.js

export function formatBalance(balance) {
   if (typeof balance === 'string' && balance.length >= 4) {
      const insertPosition = balance.length - 4;
      return balance.slice(0, insertPosition) + ',' + balance.slice(insertPosition);
   }
   return balance;
  }
  