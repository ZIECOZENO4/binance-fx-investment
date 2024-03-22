"use client"
import React from "react";
import { useUserInvest } from '@/tenstack-hooks/user-invest';

const InvestmentBalance = () => {
    const { data: userInfo } = useUserInvest();
    const userInvestBalance = userInfo.investBalance;
    console.log("this is the user investment balance from the backend", userInvestBalance);

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
            {userInvestBalance !== null ? `$${formatWithCommas(userInvestBalance.toFixed(2))}` : '$  0.00 '}
        </div>
    );
}

export default InvestmentBalance;