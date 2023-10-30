import React, { useContext, useState } from 'react';
import UserDetails from './UserDetails';
import Education from './Education';
import Employment from './Employment';
import DisplayData from './DisplayData';
import { AppContext } from './AuthContextPro';
import RangeSlider from './RangeSlider';
import toast from 'react-hot-toast';

const steps = ['Step 1', 'Step 2', 'Step 3', 'step 4'];

const pages = [<UserDetails />, <Employment />, <Education />, <RangeSlider />];

const HorizontalStepper = () => {
    const { setDisplay, pageNumber } = useContext(AppContext)
    const [activeStep, setActiveStep] = useState(0);

    const displayHandler = () => {
        setDisplay(1)
    }
    console.log(pageNumber)
    const handleNext = () => {

        if (pageNumber == activeStep) {
            // alert("Something something!!")
            toast.error("Please fill the full details...")

        } else if (pageNumber != activeStep) {
            setActiveStep((pre) => pre + 1)
        }
    };

    const handleBack = (e) => {
        e.preventDefault()
        setActiveStep((pre) => pre - 1);
        console.log(activeStep)
    };

    return (
        <div className="stepper-container">
            <div className="step-indicators">
                {steps.map((label, index) => (
                    <div
                        key={label}
                        className={`step ${index === activeStep ? 'active' : index < activeStep ? 'completed' : ''}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <div className="step-content" key={activeStep}>
                <p className={`step-text ${activeStep === 0 ? 'fade-in' : ''}`}>{steps[activeStep]}</p>
                {pages[activeStep]}
                {activeStep === steps.length - 1 ? (

                    <div className='flex justify-center items-center'>
                        <div className='mt-10 me-8'>
                            <button className='text-white font-bold h-[40px] w-[80px]' onClick={displayHandler}>Finish</button>
                        </div>

                        <div className='mt-10 me-8'>
                            <button onClick={handleBack} className=' text-white font-bold h-[40px] w-[80px]'>Back</button>
                        </div>
                    </div>
                ) : (
                    <div className='mt-10 flex justify-center items-center'>
                        <button className='me-8' disabled={activeStep === 0} onClick={handleBack}>
                            Back
                        </button>
                        <button className='me-8' onClick={handleNext}>Next</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizontalStepper;
