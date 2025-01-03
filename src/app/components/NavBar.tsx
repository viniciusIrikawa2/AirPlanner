import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between px-20 py-5">
        <div>
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            height={50}
            width={50}
            alt="AirPlanner logo"
            title="AirPlanner"
            priority/>
        </div>
        <ul className="flex flex-row items-center gap-10 cursor-pointer">
          <li>Preços</li>
          <li>Sobre</li>
          <li>Blog</li>
          <Link href={"/"} className="bg-nice-pink rounded-full px-4 py-1 text-white">
            Começar
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
