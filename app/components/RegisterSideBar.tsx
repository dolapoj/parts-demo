import React from "react";
import Image from "next/image";
import Square from "../../images/square.svg";
// import SignUpImage from "../../images/sign-up-vector.png";
import styles from '../(auth)/login/login.module.scss'

const RegisterSideBar = () => {
  const whyList = [
    "Faster response to our inquires",
    "Multiple quotes per each request",
    "Sourcing assistant to help your source easier",
  ];
  return (
    <div className={`${styles.bg_blue} hidden sm:block sm:flex flex-col justify-between items-center gap-20 text-black sm:w-1/3 p-6`}>
      <div>
        <p style={{ fontWeight: "800" }}>Why register with us?</p>
        {whyList.map((item, index) => (
          <p key={index} className="flex flex-row items-start mb-2 mt-2 space text-xs">
            <Image className="w-3" src={Square} alt="rectangle" />
            <span className="text-black pl-2">{item}</span>
          </p>
        ))}
      </div>
      <div>
        <img
          src='images/sign-up-vector.png'
          alt="image-vector"
          className={`w-40 md:w-60`}
        />
      </div>
    </div>
  );
};

export default RegisterSideBar;
