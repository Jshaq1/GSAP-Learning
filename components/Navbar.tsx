import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../public/shopping-cart.png";

const Navbar = () => {
  const navLinks = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
    ["About", "/about"],
  ];

  return (
    <header className="sticky top-0 header w-full z-10">
      <nav className="flex justify-between items-center px-10 py-10">
        <Link href="/" id="Logo" className="flex justify-center items-center">
          <h1>Art of Party</h1>
        </Link>
        <div className="w-fit-content flex justify-between gap-20">
          {navLinks.map(([title, url, idx]) => {
            return (
              <Link className="" key={idx} href={url}>
                {title}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/cart">
            <Image
              src={CartIcon}
              alt="shopping cart"
              width={30}
              height={90}
              className="object-contain"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
