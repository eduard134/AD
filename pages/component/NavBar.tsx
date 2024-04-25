"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] text-xl font-public  m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image src="/logo.png" alt="A&D" width={100} height={100} />
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <div
              className="hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] px-2 py-0.5 rounded-md duration-500 transform
               hover:translate-y-[-4px]"
            >
              <Link href="/">Acasă</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className="hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] px-2 py-0.5 rounded-md duration-500 transform
              hover:translate-y-[-4px]"
            >
              <Link href="/about">Despre Noi</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className="hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] px-2 py-0.5 rounded-md duration-500 transform
              hover:translate-y-[-4px]"
            >
              <Link href="/rezultate">Rezultate</Link>
            </div>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-20">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] sm:px-2 sm:py-0.5 rounded-md duration-500 transform
               hover:scale-110 "
            >
              <Link href="/">Acasă</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] sm:px-2 sm:py-0.5 rounded-md duration-500 transform
               hover:scale-110"
            >
              <Link href="/about">Despre Noi</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:bg-gradient-to-br from-[#c03167] to-[#f9333a] sm:px-2 sm:py-0.5 rounded-md duration-500 transform
               hover:scale-110"
            >
              <Link href="/rezultate">Rezultate</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
