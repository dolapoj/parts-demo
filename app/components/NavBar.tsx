"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

type NavBarProps = {
  userData: any; // Define the type of userData here
};

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

type SearchData = {
  searchfor: string;
};

const NavBar: React.FC<NavBarProps> = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | any>({});
  const [searchData, setSearchData] = useState<SearchData | any>({ search: "" });
  const [key, setKey] = useState(0); // Key to force remount
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const user = session ? session.user : null;
  const router = useRouter();

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
    // console.log(storedUserData);
  }, [key]);

  useEffect(() => {
    if (session?.user) {
      setUserData(session.user);
      // Optionally, store user data in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(session.user));
    }
  }, [session]);

  //Handle Input Change in Form Fields
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchData((prevSearchData: any) => ({
      ...prevSearchData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint =
      "https://partdirectafrica.com/part/search/d6c4a436-5f1f-40a0-8184-7d3db09a8431/partnumber/";
    try {
      const response = await axios.post(endpoint, searchData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Save responseData to localStorage
      localStorage.setItem("searchByPartNumber", JSON.stringify(response.data.results));

      // Handle the response as needed
      console.log("Search response:", response.data);
      router.push(`/search`)
      setSearchData({searchfor: ""})
    } catch (error) {
      console.error("There is an error:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setUserData(null);
    setIsLoggedIn(false);
    setKey((prevKey) => prevKey + 1); // Force remount on logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
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
            {menuOpen && (
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {!userData?.first_name && (
                  <div className="flex flex-col text-sm gap-4 justify-start mr-6">
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
                {userData?.first_name && (
                  <h4 className="text-green-700 text-xs">
                    Hello,{" "}
                    {
                      // JSON.stringify(user?.name).replace(/"/g, "").split(" ")[0] ||
                      userData.first_name
                    }{" "}
                  </h4>
                )}
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
                          {/* <span className="badge">New</span> */}
                        </a>
                      </li>
                      <li>
                        <a
                          // onClick={() => signOut({ callbackUrl: `/login` })}
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
          <Link href='/'>
            <Image
              alt="logo"
              src="/images/logo.png"
              className={`w-24 sm:w-40`}
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <form
            onSubmit={handleSubmitSearch}
            className="max-w-[480px] w-full px-4"
          >
            <div className="relative">
              <input
                type="text"
                name="searchfor"
                className="w-full border h-12 shadow p-4 placeholder:text-xs rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                placeholder="Search by part number"
                onChange={handleInputChange}
                value={searchData.searchfor}
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
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661 14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="navbar-end hidden lg:flex">
          {!userData?.first_name && (
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
              <h4 className="text-green-700 text-md">
                Hello,{" "}
                {
                  // JSON.stringify(user?.name).replace(/"/g, "").split(" ")[0] ||
                  userData.first_name
                }{" "}
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
                    {/* <span className="badge">New</span> */}
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
