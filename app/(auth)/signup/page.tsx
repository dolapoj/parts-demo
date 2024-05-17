import React from "react";
import Image from "next/image";
// import Logo from "../../../images/kinetic-parts-logo.png";
import styles from "../../../app/(auth)/login/login.module.scss";
import RegisterSideBar from "@/app/components/RegisterSideBar";
import SignUpCard from "@/app/components/SignUpCard";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className={`${styles.login_container} min-h-screen`}>
      <div
        className={`flex flex-col justify-start p-8 sm:p-16 sm:px-52 2xl:px-96`}
      >
        <Image
          src='/images/logo.png'
          alt="Kinetic Parts"
          className={`w-28 sm:w-60`}
          width={28}
          height={28}
        />
        <p
          className={`${styles.no_acct_text} text-center text-base sm:text-x sm:text-right mt-8 sm:mt-4`}
        >
          Have an account?
          {/* {" "} */}
          <Link href='/login'><span className="cursor-pointer">Sign In Now!</span></Link>
        </p>
        <div className="flex flex-row justify-center mt-4 h-auto text-white w-full">
          <div className="bg-white text-black sm:w-2/3 p-2 sm:p-6 h-full w-full">
            <SignUpCard />
          </div>
          <RegisterSideBar />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
