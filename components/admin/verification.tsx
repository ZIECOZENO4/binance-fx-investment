"use client"
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import AutoSignOut from '@/app/sync-user/autosignout';

const AdminPageVerification = () => {

  const router = useRouter();

 const [step, setStep] = useState(1);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [passcode, setPasscode] = useState('');
 const [error, setError] = useState(false);


 const hardcodedEmail = 'binanceFX2023admin200098@example.com';
 const hardcodedPassword = 'BFXpassword89onmcsdyvvb09089@#%$%^$##@';
 const hardcodedPasscode = '@FDJUHV$%&^$njdbnjg1234';


 const sendEmailNotification = async () => {
    console.log('Email notification sent');
 };

 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => {
    if (step === 1 && email === hardcodedEmail && password === hardcodedPassword) {
      setStep(2);
    } else if (step === 2 && passcode === hardcodedPasscode) {
      setStep(3);
      sendEmailNotification();
    } else if (step === 3) {
      // Navigate to the admin page
      router.push('/Notallowedbyclients/admins');
    } else {
      setError(true);
    }
 }, [email, password, passcode, step]);

 if (error) {
    return <AutoSignOut />;
 }

 return (
    <div>
      {step === 1 && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Notifying the owner...</p>
        </div>
      )}
    </div>
 );
};

export default AdminPageVerification;