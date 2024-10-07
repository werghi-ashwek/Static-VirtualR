import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileMenuOpened(!mobileMenuOpened);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-neutral-900">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight text-white">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 align-center">
            <a href="#" className="py-2 px-3 border rounded-md text-white">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md text-white"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMobileDrawer}>
              {mobileMenuOpened ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>
        {mobileMenuOpened && (
          <div className="top-0 right-0 z-40 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="py-2 px-3 border rounded-md text-white">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
