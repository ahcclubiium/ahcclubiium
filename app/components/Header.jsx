'use client'

import { useEffect } from 'react';
import LogoImage from "./LogoImage";

export default function Header() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }, []);

  return (
    <header
      className="
        sticky left-0 top-0 w-full 
        bg-[#B89670] p-1 px-10 flex 
        font-bold text-white z-30"
    >
      {/* <LogoImage /> */}
      <div className="flex w-screen justify-center gap-4 lg:gap-14 items-center shadow-md ">
        <a
          href="/"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Home 
        </a>
        <a
          href="/donation"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Donation
        </a>
        <a
          href="/program"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Program
        </a>
        <a
          href="/adoption"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Adoption
        </a>
        <a
          href="/contact"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
