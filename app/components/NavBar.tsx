"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type NavBarProps = {
  userData: any; // Define the type of userData here
};

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

const NavBar: React.FC<NavBarProps> = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | any>({});
  const user = session ? session.user : null;
  // console.log(session)
  // const user = session ? session.user : null;

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    // console.log(storedUserData);
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {!userData?.first_name && !session && (
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
              {userData?.first_name ||
                (session && (
                  <h4 className="text-green-700">
                    Yo,{" "}
                    {JSON.stringify(user?.name)
                      .replace(/"/g, "")
                      .split(" ")[0] || userData.first_name}{" "}
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
              {session || userData?.first_name ? (
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
          <Image
            alt="logo"
            src="/images/logo.png"
            className={`w-24 sm:w-40`}
            width={24}
            height={24}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <form action="/search" className="max-w-[480px] w-full px-4">
            <div className="relative">
              <input
                type="text"
                name="q"
                className="w-full border h-12 shadow p-4 placeholder:text-sm rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                placeholder="Search product"
              />
              <button type="submit" className="absolute bottom-3.5 right-3">
                <svg
                  className="text-teal-400 h-5 w-5 fill-current dark:text-teal-300"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="navbar-end">
          {!userData?.first_name && !session && (
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
          {userData?.first_name ||
            (session && (
              <h4 className="text-green-700">
                Yo,{" "}
                {JSON.stringify(user?.name).replace(/"/g, "").split(" ")[0] ||
                  userData.first_name}{" "}
              </h4>
            ))}
          <Link href="/cart">
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
            </div>
          </Link>
          {session || userData?.first_name ? (
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

      {/* old */}
      {/* <div className="flex flex-row justify-between navbar bg-base-100 p-8">
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
          <form action="/search" className="max-w-[480px] w-full px-4">
            <div className="relative">
              <input
                type="text"
                name="q"
                className="w-full border h-12 shadow p-4 placeholder:text-sm rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                placeholder="Search product"
              />
              <button type="submit" className="absolute bottom-3.5 right-3">
                <svg
                  className="text-teal-400 h-5 w-5 fill-current dark:text-teal-300"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
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
