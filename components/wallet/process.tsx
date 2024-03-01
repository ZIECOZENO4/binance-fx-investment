"use client"
import React from 'react'
import { useState } from 'react';
import Introduction from './Introduction';
import Upgrade from './Upgrade';
import IdCard from './IdCard';
import PhoneNumber from './PhoneNumber';
import DriversLicense from './DriversLicense';
import SocialMediaLogin from './SocialMediaLogin';

const MultiStepForm = () => {
 const [activeStep, setActiveStep] = useState(0);

 const steps = [
    { name: 'Introduction', component: <Introduction /> },
    { name: 'ID Card', component: <IdCard /> },
    { name: 'Phone Number', component: <PhoneNumber /> },
    { name: 'Driver\'s License', component: <DriversLicense /> },
    { name: 'Social Media Login', component: <SocialMediaLogin /> },
    { name: 'Upgrade', component: <Upgrade /> },
 ];

 return (
    <div className="w-full max-w-3xl mx-auto overflow-y-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold flex flex-col justify-center align-middle ">Upgrade Process</h2>
      </div>
      <div className="overflow-x-auto flex flex-row justify-start align-middle font-bold">
 {steps.map((step, index) => (
    <div key={index} className={`py-2 flex flex-row justify-start align-middle items-start${index === activeStep ? ' font-bold border-b-2 border-green-500 text-md' : ' border-b-2 border-red-500 '}`}>
      {step.name}
    </div>
  ))}
</div>
      <div className="mt-12 flex justify-end align-middle items-end">
        {steps[activeStep].component}
        {activeStep < steps.length - 1 && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
 );
};

export default MultiStepForm;
