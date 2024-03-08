'use client';
import React, { useState } from 'react'
import { Stepper } from 'react-form-stepper';

function CustomStepper(props: any) {
      return (
        <Stepper
            { ...props }
            connectorStateColors={false}
            connectorStyleConfig={{
                  completedColor: 'green',
                  activeColor: '#ffbd13',
                  // disabledColor: '#eee'
            }}
            styleConfig={{
                  activeBgColor: '#ffbd13',
                  completedBgColor: 'green',
                  inactiveBgColor: '#ffbd13',
                  activeTextColor: '#111',
                  completedTextColor: 'white',
                  inactiveTextColor: '#444'
            }}
          />
      );
}


const Information = () => {
  return (
    <div>Info</div>
  )
}

const Verification = () => {
  return (
    <div>Verification</div>
  )
}

const Complete = () => {
  return (
    <div>Complete</div>
  )
}


const SignUpCard = () => {
      const steps = [
            { label: 'Information', onClick: () => setActiveStep(0) },
            { label: 'Verification', onClick: () => setActiveStep(1) },
            { label: 'Complete', onClick: () => setActiveStep(2) }
      ]

      const [ activeStep, setActiveStep ] = useState(0)

      function getSectionComponent() {
            switch (activeStep) {
                  case 0: return <Information />
                  case 0: return <Verification />
                  case 0: return <Complete />
                  default: return null;
            }
      }

  return (
    <main className='p-6'>
      <p style={{fontWeight: '700'}} className='text-2xl'>Create Account</p>
      <CustomStepper
            steps={steps}
            activeStep={activeStep}
      />
    </main>
  )
}

export default SignUpCard