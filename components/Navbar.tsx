import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../public/shopping-cart.png";
import { gooey } from ".";

const Navbar = () => {
  const navLinks = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="fixed top-0 left-0 header h-fit w-full z-10 px-10">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          id="Logo"
          className="flex justify-center items-center h-20"
        >
          <h1 style={gooey.style} className="text-regal-green text-4xl">
            gooey
          </h1>
        </Link>
        <div className="w-fit-content flex justify-between gap-10">
          {navLinks.map(([title, url, idx]) => {
            return (
              <Link className="" key={idx} href={url}>
                {title}
              </Link>
            );
          })}
        </div>
        {/* <div>
          <Link href="/cart">
            <Image
              src={CartIcon}
              alt="shopping cart"
              width={30}
              height={90}
              className="object-contain"
            />
          </Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
