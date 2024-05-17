"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type NavBarProps = {
  userData: any; // Define the type of userData here
};

const NavBar: React.FC<NavBarProps> = ({ userData }) => {
  const { data: session } = useSession();
  const user = session ? session.user : null;
  // console.log(session)

  return (
    <>
      <div className="flex flex-row justify-between navbar bg-base-100 p-8">
        <div className="">
          <Image
            alt="logo"
            src="/images/logo.png"
            className={`w-24 sm:w-40`}
            width={24}
            height={24}
          />
        </div>
        <div className="">
          <form>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow border-none sm:w-70 focus:border-none placeholder:italic placeholder:text-slate-400"
                placeholder="Search by product name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
        </div>
        <div className="">
          {!userData.first_name && !session && (
            <div className="flex flex-row text-sm gap-4 justify-start mr-6">
              <Link href="/login">
                <span className="hover:text-green-500 hover:font-bold">
                  Sign In
                </span>
              </Link>
              <Link href="/signup">
                <span className="hover:text-green-500 hover:font-bold">
                  Sign Up
                </span>
              </Link>
            </div>
          )}
          {userData.first_name ||
            (session && (
              <h4 className="text-green-700">
                Yo,{" "}
                {JSON.stringify(user?.name).replace(/"/g, "").split(" ")[0] ||
                  userData.first_name}{" "}
              </h4>
            ))}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">2 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {session || userData.first_name ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    alt="Profile Image"
                    src={user?.image as string}
                    // src='/images/pad.png'
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => signOut({ callbackUrl: `/login` })}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Image
            alt="logo"
            src="/images/logo.png"
            className={`w-24 sm:w-40`}
            width={24}
            height={24}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <section
        style={{ backgroundColor: "#02026B" }}
        className="text-white text-xs sm:text-xl font-semibold sm:py-2 sm:px-12"
      >
        <ul className="flex justify-start items-center pl-2 py-2 gap-2 sm:gap-8">
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">Brand</li>
          <li className="cursor-pointer">Deals</li>
          <li className="cursor-pointer">Customer Service</li>
        </ul>
      </section>
    </>
  );
};

export default NavBar;
