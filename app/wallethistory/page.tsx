"use client";
import React from "react";
import { useUserPayments } from "@/tenstack-hooks/user-payment";

const PaymentDetails = () => {
  const { data: payments, isLoading, isError, error } = useUserPayments();

  if (isLoading) {
    return <div>Loading payment details...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || "Unknown error"}</div>;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      {payments && payments.length > 0 ? (
        payments.map((payment) => (
          <div key={payment.id}>
            <p>Amount: {payment.amount}</p>
            <p>Coin: {payment.coin}</p>
            <p>Plan: {payment.plan}</p>
            {/* Display other payment details */}
          </div>
        ))
      ) : (
        <div>No payment details available.</div>
      )}
    </div>
  );
};

export default PaymentDetails;
