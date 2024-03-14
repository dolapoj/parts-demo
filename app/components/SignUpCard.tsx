"use client";
import React, { useState } from "react";
// import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "./Button";
import SocialIcons from "./SocialIcons";
import styles from "../(auth)/signup/signup.module.scss";
import Square from "../../images/square.svg";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Registration",
    fields: ["email"],
  },
  {
    id: "Step 2",
    name: "Information",
    fields: [
      "vehicleOwner",
      "firstName",
      "lastName",
      "country",
      "password",
      "confirmPassword",
      "phoneNumber",
    ],
  },
  {
    id: "Step 3",
    name: "Verification",
  },
  {
    id: "Step 4",
    name: "Complete",
  },
];

const SignUpCard = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  console.log(currentStep);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  //Handle Next logic
  const handleNext = async () => {
    // const fields = steps[currentStep].fields
    // const output = await trigger(fields as FieldName[], { shouldFocus: true })

    // if (!output) return null

    if (currentStep < steps.length - 1) {
      console.log("I got here");
      // if (currentStep === steps.length - 2) {
      //   await handleSubmit(processForm)()
      // }
      // setPreviousStep(currentStep)
      setCurrentStep((step) => step + 1);
    }
  };

  //Handle Previous logic
  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <main className="p-6">
      <p style={{ fontWeight: "700" }} className="text-2xl">
        Create Account
      </p>
      <div className="mt-4">
        {/* STEPS */}
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-2 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium stepColorBorder transition-colors ">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <span className="text-sm font-medium stepColor">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-gray-500 transition-colors">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* FORM */}
        <form className="py-12" onSubmit={handleSubmit(processForm)}>
          {/* Step One Form */}
          {currentStep === 0 && (
            <div>
              <div className="flex flex-col">
                <label className="text-left sm:ml-4 font-semibold">
                  Sign Up with Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="username001@xmail.com"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="strike mt-8">
                <span>or with</span>
              </div>
              <SocialIcons />
            </div>
          )}
          {/* Step 2 Form */}
          {currentStep === 1 && (
            <div>
              <div className="flex flex-col">
                <label className="text-left sm:ml-4">
                  What type of user are you?{" "}
                  <span className="text-sm italic">(optional)</span>
                </label>
                <select className="inputBg visible" name="owners">
                  <option value="Vehicle_owner">Vehicle Owner</option>
                  <option value="fleet_manager">Fleet Manager</option>
                  <option value="auto_repairer">Auto Repairer</option>
                </select>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Firstname</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Lastname</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="username001@xmail.com"
                  autoComplete="off"
                  className={`${styles.inputBg}`}
                  readOnly
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Country/Region</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Nigeria"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Password</label>
                <input
                  type="password"
                  name="country"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Confirm Password</label>
                <input
                  type="password"
                  name="country"
                  autoComplete="off"
                  className=""
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Mobile Number</label>
                <input
                  type="tel"
                  name="country"
                  placeholder="8100617304"
                  autoComplete="off"
                  className="inputField"
                />
              </div>
              <div className="flex flex-row items-center mt-4">
                <label className="text-xs">
                    <input type="checkbox" name="remember" /> I agree to the User Agreement and the Privacy Policy
                </label>
              </div>
            </div>
          )}
          {/* Step 3 Form */}
          {currentStep === 2 && (
            <div>
              <p>
                A confirmation mail was sent to your mailbox <br />
                <span className="font-bold text-blue-600">
                  username001@xmail.com
                </span>{" "}
                <br />
                with a link to verify your account
              </p>
              <p className="text-xs mt-2">
                <span className="text-blue-600">Please check your email</span>{" "}
                and continue your registration with 1 hour
              </p>
              <p className="mt-4 text-sm font-medium">
                Having problems receiving email?
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Please check your spam folder
                </span>
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Click here to{" "}
                  <span className="text-blue-600 cursor-pointer">
                    resend the email
                  </span>
                </span>
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Have you received? Try to{" "}
                  <span className="text-blue-600 cursor-pointer">
                    change your email address
                  </span>{" "}
                  instead of username001@xmail.com
                </span>
              </p>
            </div>
          )}
          {currentStep === 3 && (
            <div className="mb-8">
              <h2
                style={{ color: "#00E600" }}
                className="text-center mt-6 text-2xl sm:text-3xl  font-bold leading-7"
              >
                Welcome Back
              </h2>
              <p className="mt-1 text-center text-sm leading-6">
                You have successfully created an account
              </p>
            </div>
          )}
        </form>
        {/* Navigation */}

        <div className="flex mt-8">
          <button
            type="button"
            className={`button m-auto font-medium text-white w-full p-2`}
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === 3 ? <Link className="w-100" href='/login'>Sign In</Link>: 'Next'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignUpCard;
