import React from 'react'
import InvestmentHistory from "../../components/component/cointransaction"
import UserPayments from '@/components/userdetails/paymenthistory'
const InvestmentHistoryPage = () => {
  return (
    <div>
      <InvestmentHistory />
      <UserPayments />
    </div>
  )
}

export default InvestmentHistoryPage