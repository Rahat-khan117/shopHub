"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthButtons from "./AuthButtons";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
  const { data: session } = useSession();

  const handleRoute = () => {
    if (session) {
      router.push("/dashboard");
    } else {
      Swal.fire({
        title: "warning!",
        text: " For access this page you have to login first",
        icon: "warning",
        confirmButtonText: "OK",
      });
      router.push("/login");
    }
  };

  return (
    <div className="bg-base-100 shadow-sm h-[70px] w-[100vw]">
      <div className="navbar   items-center  mx-auto px-3 lg:px-20 sm:px-12 md:px-16">
        <div className="navbar-start h-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="text-xl font-bold" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-xl font-bold" href={"/products"}>
                  Products
                </Link>
              </li>
              <li>
                <div onClick={handleRoute} className="text-xl font-bold" >
                  Dashboard
                </div>
              </li>
              <div className="mt-3 w-fit">
                <AuthButtons></AuthButtons>
              </div>
            </ul>
          </div>
          <Link href={"/"} className="flex items-center h-full cursor-pointer">
            <Image alt="logo" src={"/logo.png"} width={60} height={60}></Image>
            <p className="text-3xl sm:text-4xl font-bold">
              Shop<span className="text-blue-900">Hub</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-xl font-bold" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl font-bold" href={"/products"}>
                Products
              </Link>
            </li>

            <li>
              <div onClick={handleRoute} className="text-xl font-bold" >
                Dashboard
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full sm:flex justify-end hidden ">
          <AuthButtons></AuthButtons>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
