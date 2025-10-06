"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={35}
          height={35}
          alt="VideoCall.io Logo"
          className="max-sm:size-10"
        />
        <p className="text-lg font-extrabold text-white max-sm:hidden">
          VideoCall.io
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk Authentication */}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
