import React from "react";
import { useUserPayments } from '@/tenstack-hooks/user-payment';

const PaymentDetails = () => {
    const { data: payments } = useUserPayments();

    return (
        <div>
            <h2>Payment Details</h2>
            {payments.map((payment) => (
                <div key={payment.id}>
                    <p>Amount: {payment.amount}</p>
                    <p>Coin: {payment.coin}</p>
                    <p>Plan: {payment.plan}</p>
                    {/* Display other payment details */}
                </div>
            ))}
        </div>
    );
}

export default PaymentDetails;
