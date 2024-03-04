"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "/public/assets/images/logo.png";
import login_icon from "/public/assets/icons/login_icon.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav
      className="flex-between fixed w-full bg-white shadow-md z-10 px-3 py-4
    "
    >
      <div className="flex flex-row gap-5">
        <div className="px-10">
          <Link href="/" className="flex items-center gap-1">
            <Image src={logo} alt="institute logo" height={50} width={50} />
          </Link>
        </div>
        <div className="flex flex-row gap-8 py-3">
          <Link href="/department">
            <p>Departments</p>
          </Link>
          <Link href="/finance">
            <p>Finances</p>
          </Link>
          <Link href="/faculty">
            <p>Faculty</p>
          </Link>
        </div>
      </div>

      <div className="flex-between gap-5">
        <SignedOut>
          <div className="flex flex-row gap-3">
            <Link href="/sign-in">
              <Button
                className="small-medium btn-secondary min-h-[41px]
                 w-full rounded-lg px-4 py-3 shadow-none"
              >
                <Image
                  src={login_icon}
                  alt="login icon"
                  height={20}
                  width={20}
                />
                <span className="primary-text-gradient max-lg:hidden pl-2">
                  Log In
                </span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button
                className="small-medium lignt-border-2 btn-tertiary min-h-[41px]
                 w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900"
              >
                <span className="max-lg:hidden">Sign up</span>
              </Button>
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
