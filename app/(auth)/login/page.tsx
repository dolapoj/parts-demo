import React from "react";
import Image from "next/image";
import LoginCard from "@/app/components/LoginCard";
import Logo from "../../../images/logo.png";
import Square from "../../../images/square.svg";
import SignUpImage from "../../../images/sign-up-vector.png";
import styles from "./login.module.scss";

const LoginPage = () => {
  const whyList = [
    "Faster response to our inquires",
    "Multiple quotes per each request",
    "Sourcing assistant to help you source easier",
  ];
  return (
    <main className={`${styles.login_container} min-h-screen`}>
      <div className={`flex flex-col justify-start p-14 sm:p-16 sm:px-52`}>
        <Image
          src={Logo}
          alt="Kinetic Parts"
          quality={100}
          className={`w-28 sm:w-60`}
        />
        <p
          className={`${styles.no_acct_text} text-center text-base sm:text-x sm:text-right mt-8 sm:mt-4`}
        >
          Do not have an account? <span className="cursor-pointer">Sign Up Now!</span>
        </p>
        <div className="flex flex-row justify-center bg-black mt-4 h-auto text-white w-full">
          <div className="bg-white text-black w-2/3 p-6 h-full">
            <LoginCard />
          </div>
          <div className={`${styles.bg_blue} flex flex-col justify-center items-center gap-24 text-black w-1/3 p-6`}>
            <div>
              <p style={{ fontWeight: "800" }}>Why register with us?</p>
              {whyList.map((item) => (
                <p className="flex flex-row items-start mb-2 mt-2 space text-xs">
                  <Image className="w-3" src={Square} alt="rectangle" />
                  <span className="text-black pl-2">{item}</span>
                </p>
              ))}
            </div>
            <div>
              <Image
                src={SignUpImage}
                alt="image-vector"
                quality={100}
                className={`w-40 md:w-60`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
