"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
const pathName = usePathname();
const showNavbar = ["/", "/generate"].includes(pathName);

  return (<>
   {
    showNavbar && <nav className="bg-white w-[80vw] fixed flex justify-between items-center top-10 right-[10vw] rounded-full">
      <div className="logo  flex items-center  gap-12 px-6 py-2">
        <Link href="/">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 444.1 100"
  role="img"
  aria-label="BitTree"
  width="118"
  height="28"
  className="h-10 block h-auto w-full max-sm:hidden text-black"
>
  <path
    fill="currentColor"
    d="M0 10.7h35.5c14.8 0 23.8 7.5 23.8 19.6 0 8.8-5.1 15.1-13.1 17.6 9.8 2.2 15.8 9.2 15.8 19.5 0 13.5-9.8 21.8-25.5 21.8H0V10.7zm14.2 32.5h18.6c7.6 0 12.1-3.8 12.1-10.1 0-6.3-4.5-9.8-12.1-9.8H14.2v19.9zm0 33.4h20.4c8.3 0 13.1-4.1 13.1-10.9 0-6.8-4.8-10.8-13.1-10.8H14.2v21.7z"
  />
  <g transform="translate(14.4, 0)">
    <path
      fill="currentColor"
      d="M67.5 10.7c4.8 0 8.9 3.7 8.9 8.6 0 4.9-4 8.8-8.9 8.8s-8.9-3.9-8.9-8.8c0-4.8 3.9-8.6 8.9-8.6zm-7 24.5h13.6v63.2H60.5V35.2z"
    />
  </g>
  <g transform="translate(-110.6, 0)">
    <path
      fill="currentColor"
      d="M208.6 19.1h13.9v16.1h16.2v11.3h-16.2V79c0 4.1 2.5 6.7 6.5 6.7h9.1v12.7h-10.9c-11.8 0-18.5-7-18.5-19.4l-.1-59.9z"
    />
  </g>
  <path
    fill="currentColor"
    d="M134 10.7h60v13.1h-22.9v74.5h-14.2V23.8H134V10.7z"
  />
  <g transform="translate(-50, 0)">
    <path
      fill="currentColor"
      d="M245.6 35.2h12.6V43c3.4-6 9-9.5 15.9-9.5 2.1 0 3.2.1 4.8.6v12.6c-.9-.2-2.3-.5-5.1-.5-10 0-15.5 8.4-15.5 22.8v29.2h-13.6v-63h.9zm65.2-1.7c15 0 31.3 9 31.3 34.7V70h-48.8c1.1 11.3 7.6 17.5 18.6 17.5 7.9 0 14.5-4.2 16-10.1h13.9c-1.5 12.6-14.7 22.6-30 22.6-19.6 0-32-12.7-32-33.3 0-18.3 11.9-33.2 31-33.2zm16.7 25.3c-1.9-7.8-8.1-12.7-16.7-12.7-8.3 0-14.2 5-16.5 12.7h33.2zm51.6-25.3c15 0 31.3 9 31.3 34.7V70h-48.8c1.1 11.3 7.6 17.5 18.6 17.5 7.9 0 14.5-4.2 16-10.1H410C408.6 90 395.4 100 380.1 100c-19.6 0-32-12.7-32-33.3 0-18.3 11.9-33.2 31-33.2zm16.7 25.3c-1.9-7.8-8.1-12.7-16.8-12.7-8.3 0-14.2 5-16.5 12.7h33.3zm17.9-25.5H438l-17.3-16.4 9.5-9.7L446.7 24V0H461v24l16.5-16.8 9.5 9.7-17.3 16.4H494v13.6h-24.5L487 63.7l-9.5 9.5-23.7-23.7-23.7 23.7-9.5-9.5L438 46.8h-24.5V33.3h.2zm33.1 32.9h14.3v32.2h-14.3V66.2z"
    />
  </g>
</svg>
</Link>
        <ul className="flex font-medium gap-6">
          <Link href="/">
            {" "}
            <li className="hover:bg-gray-100  rounded-2xl py-3 px-3">
              Template
            </li>
          </Link>
          <Link href="/marketplace">
            {" "}
            <li className="hover:bg-gray-100  rounded-2xl py-3 px-3">
              Marketplace
            </li>
          </Link>
          <Link href="/discover">
            {" "}
            <li className="hover:bg-gray-100  rounded-2xl py-3 px-3">
              Discover
            </li>
          </Link>
          <Link href="/pricing">
            {" "}
            <li className="hover:bg-gray-100  rounded-2xl py-3 px-3">
              Pricing
            </li>
          </Link>
        </ul>
      </div>
      <div className="px-6 gap-4 flex items-center">
        <button className="hover:bg-gray-200 text-black px-3 py-3 rounded-2xl font-medium cursor-pointer">
          Login
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-3 rounded-full font-bold cursor-pointer">
          Sign UP
        </button>
      </div>
    </nav>
    }
    </>
  );
};

export default Navbar;
