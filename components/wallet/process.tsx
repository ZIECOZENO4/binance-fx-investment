"use client"
import React from 'react'
import { useState } from 'react';
import Introduction from './Introduction';
import Upgrade from './Upgrade';
import IdCard from './IdCard';
import PhoneNumber from './PhoneNumber';
import DriversLicense from './DriversLicense';
import SocialMediaLogin from './SocialMediaLogin';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
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
    <Card className="w-full h-[70vh] bg-slate-800 text-whit">
      <CardHeader className="flex gap-3">
      <div className="overflow-x-auto flex flex-row justify-start align-middle  leading-8 gap-6 mx-1 font-bold">
 {steps.map((step, index) => (
    <div key={index} className={`py-2 flex flex-row  font-bold justify-start align-middle leading-6 gap-3 mx-2 items-start${index === activeStep ? 'w-auto font-bold border-b-2 border-green-500 text-md mx-1' : ' border-b-2 border-slate-200 w-auto'}`}>
      {step.name}
    </div>
  ))}
</div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className=" w-full overflow-y-auto h-[60vh] flex flex-col justify-center align-middle items-center">
        {steps[activeStep].component}
        </div>
   
      </CardBody>
      <Divider/>
      <CardFooter>
      {activeStep < steps.length - 1 && (
          <button
            className="bg-green-500 w-full h-12 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </button>
        )}
      </CardFooter>
    </Card>

 );
};

export default MultiStepForm;
