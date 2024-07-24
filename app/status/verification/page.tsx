import React from 'react'
import Image from 'next/image'
import Verify from '../../../images/verifySuccess.png'
import Link from 'next/link';

const Verification = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 text-center">
      <Image
        src={Verify}
        alt="Verify Icon"
        // placeholder='blur'
        className="w-20 flex justify-center"
      />
      <h4 className="font-black text-2xl mt-4">Thanks for verifying!</h4>
      <p className="text-xl">Verification helps keep your account secure.</p>
      <Link href="/login">
        <button
          className={`mt-28 bg-green-600 p-2 px-24 md:px-32 text-white font-semibold`}
        >
          Go To Login
        </button>
      </Link>
    </main>
  );
}

export default Verification