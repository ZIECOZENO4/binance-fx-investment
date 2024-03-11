import React from 'react';

interface ConfirmationPopupProps {
 plan: string;
 planId: string;
 amount: number;
 onClose: () => void; // Specify the type for the onClose function
}

// Use the interface in your ConfirmationPopup component
const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ plan, planId, amount, onClose }) => {
 return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2>Plan: {plan}</h2>
        <p>Plan ID: {planId}</p>
        <p>Amount: {amount}</p>
        <p>Wait for confirmation...</p>

        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">DONE</button>


      </div>
    </div>
 );
};

export default ConfirmationPopup;