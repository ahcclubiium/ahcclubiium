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
        bg-[#C77D26] p-5 px-10 flex 
        font-bold text-white z-10"
    >
      <LogoImage />
      <div className="flex w-full justify-center gap-4 lg:gap-6 items-center">
        <a href="/" className="nav-link transition ease-in-out hover:text-white/80">
          Home
        </a>
        <a href="/donation" className="nav-link transition ease-in-out hover:text-white/80">
          Donation
        </a>
        <a href="/program" className="nav-link transition ease-in-out hover:text-white/80">
          Program
        </a>
        <a
          href="https://catwatch.onrender.com/"
          className="nav-link transition ease-in-out hover:text-white/80"
        >
          Report
        </a>
        <a href="/contact" className="nav-link transition ease-in-out hover:text-white/80">
          Contact us
        </a>
      </div>
    </header>
  );
}
