"use client";


import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};




const Navvbar = () => {
  return (
    <Navbar className="bg-gray-900 bg-opacity-40 backdrop-blur-xl p-4 border-2 border-transparent hover:border-yellow-500 transition duration-300">
    <Link href='/'>
        <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">BOARDS PREP - ADTEC</p>
        </NavbarBrand>
    </Link>
    
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="hover:border-b-2 hover:border-yellow-500 transition duration-300">
            <Link color="foreground" href="../social">
              Social
            </Link>
        </NavbarItem>
        <NavbarItem className="hover:border-b-2 hover:border-blue-500 transition duration-300" isActive>
            <Link aria-current="page" href="../science">
             Science
            </Link>
        </NavbarItem>
        <NavbarItem className="hover:border-b-2 hover:border-blue-500 transition duration-300">
            <Link color="foreground" href="../hindi">
             Hindi
            </Link>
        </NavbarItem>
      
        <NavbarItem className="hover:border-b-2 hover:border-blue-500 transition duration-300 hidden lg:flex">
            <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hover:border-b-2 hover:border-blue-500 transition duration-300">
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
        </NavbarItem>
    </NavbarContent>
</Navbar>

  );
};  

export default Navvbar;
