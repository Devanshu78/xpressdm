"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center pt-4 px-4 lg:px-0 relative">
        <BrandLogo />

        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex border rounded-3xl p-2 items-center text-neutral-200 bg-white/10 border-white/20 backdrop-blur-lg">
            <li className="mx-4 hover:text-white cursor-pointer transition-colors px-3 py-2 rounded-xl">
              Home
            </li>
            <li className="mx-4 hover:text-white cursor-pointer transition-colors px-3 py-2 rounded-xl">
              Features
            </li>
            <li className="mx-4 border border-white/20 px-6 py-2 rounded-2xl backdrop-blur-md font-medium text-white cursor-pointer">
              Pricing
            </li>
            <li className="mx-4 hover:text-white cursor-pointer transition-colors px-3 py-2 rounded-xl">
              Use Cases
            </li>
            <li className="mx-4 hover:text-white cursor-pointer transition-colors px-3 py-2 rounded-xl">
              Login/Signup
            </li>
          </ul>
        </div>

        <Button>Start Free Trial</Button>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="lg:hidden ml-1 transition-all">
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0833 14.0833H19.4167M0.75 7.41667H19.4167M0.75 0.75H19.4167"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white fixed inset-0 p-4 z-50 min-h-screen">
          <div className="flex items-center justify-between">
            <BrandLogo variant="dark" />

            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="#000"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 w-full mt-10 text-black/80">
            <Button>Start Free Trial</Button>
            <p className="text-lg font-medium">Sign in</p>

            {["Features", "Pricing", "Use cases"].map((item, index) => (
              <li
                key={index}
                className="w-full text-left py-4 px-6 bg-light-shade text-lg flex items-center justify-between rounded-md list-none"
              >
                {item}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  viewBox="0 -960 960 960"
                  width="12"
                  fill="#000"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
