"use client"
import React from "react";
import { useUserInfo } from '@/tenstack-hooks/user-info';

const Balance = () => {
    const { data: userInfo } = useUserInfo();
    const userBalance = userInfo.balance;
    console.log("this is the user balance from the backend", userBalance);

    function formatWithCommas(value: number | string): string {
        let strValue = value.toString().replace(/,/g, '');
        let parts = strValue.split('.');
        let wholePart = parts[0];
        let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
        wholePart = wholePart.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
        return wholePart + decimalPart;
    }

    return (
        <div>
            {userBalance !== null ? `$${formatWithCommas(userBalance.toFixed(2))}` : '$  0.00 '}
        </div>
    );
}

export default Balance;