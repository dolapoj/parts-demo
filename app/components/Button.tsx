"use client";
import React from "react";
// import styles from '../../'

const Button = (props: any) => {
  return (
    <button
      type="button"
      className={`button m-auto font-medium text-white w-full p-2`}
    >
      {props.title}
    </button>
  );
};

export default Button;
