import React from "react";
import Image from "next/image";
import LoginCard from "@/app/components/LoginCard";
import Logo from "../../../images/logo.png";
import styles from "./login.module.scss";
import RegisterSideBar from "@/app/components/RegisterSideBar";

const LoginPage = () => {
  return (
    <main className={`${styles.login_container} min-h-screen`}>
      <div className={`flex flex-col justify-start p-8 sm:p-16 sm:px-52 2xl:px-96`}>
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
        <div className="flex flex-row justify-center mt-4 h-auto text-white w-full">
          <div className="bg-white text-black sm:w-2/3 p-2 sm:p-6 h-full w-full">
            <LoginCard />
          </div>
          <RegisterSideBar />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
