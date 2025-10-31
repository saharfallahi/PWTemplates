import React, { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Navbar = ({ data }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useOutsideClick(() => setOpen(false));

  const handleNavigate = (hash) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100 ">
      <div className="container-std">
        <div className="flex items-center justify-between h-16">
          {/* Right - Links (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              className="nav-link"
              onClick={() => handleNavigate("#hero")}
            >
              خانه
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavigate("#about")}
            >
              درباره دکتر
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavigate("#services")}
            >
              خدمات
            </button>
            <button
              className="nav-link"
              onClick={() => handleNavigate("#portfolio")}
            >
              نمونه کارها
            </button>
          </nav>

          {/* Hamburger (mobile) on the right */}
          <button
            // ref={menuRef}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-blue-200 text-gray-700 "
            aria-label="منو"
          >
            {/* Hamburger icon */}
            <svg
              onClick={() => setOpen(true)}
              className={`h-10 w-10 p-2 ${open ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* X icon */}
            <svg
              onClick={() => setOpen(false)}
              className={`h-10 w-10 p-2 ${open ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Left - Logo (desktop left, mobile left) */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="hidden lg:inline text-gray-700 font-semibold">
              {data.title}
            </span>
            <img src={data.logo.url} alt="لوگو" className="h-8 w-auto" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}

      <div
        ref={menuRef}
        className={`lg:hidden  transition-all duration-300 ease-in-out transform ${
          open
            ? "h-full opacity-100 translate-y-0"
            : "h-0 opacity-0 -translate-y-4 pointer-events-none "
        }`}
      >
        <div
          className="mx-auto px-4 py-3 space-y-3"
          style={{ maxWidth: "1024px" }}
        >
          <button
            className="block w-full text-right  nav-link"
            onClick={() => handleNavigate("#hero")}
          >
            خانه
          </button>
          <button
            className="block w-full text-right  nav-link"
            onClick={() => handleNavigate("#about")}
          >
            درباره دکتر
          </button>
          <button
            className="block w-full text-right  nav-link"
            onClick={() => handleNavigate("#services")}
          >
            خدمات
          </button>
          <button
            className="block w-full text-right  nav-link"
            onClick={() => handleNavigate("#portfolio")}
          >
            نمونه کارها
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
