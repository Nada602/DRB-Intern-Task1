"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Cars", href: "/#cars" },
  ];

  return (
    <nav className="w-full py-5 px-6 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image className="w-24 md:w-32" src={Logo} alt="careos" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="hover:text-orange-600 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Order Button */}
        <button className="hidden md:block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 rounded transition-colors">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
        style={{backgroundColor:"transparent",color:"black"}}
          onClick={toggleMenu}
          className="md:hidden hover:text-orange-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-orange-600 transition-colors py-2 border-b border-gray-200 dark:border-gray-800"
            >
              {link.label}
            </Link>
          ))}
          <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 rounded transition-colors mt-2">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;