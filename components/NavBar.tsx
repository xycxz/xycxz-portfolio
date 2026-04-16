"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar-primary">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#whoami" className="nav-item" onClick={() => setIsOpen(false)}>Who Am I</Link>
          <Link href="#projects" className="nav-item" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link>
        </ul>

        <button 
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
              className="w-8 h-8 transition-all duration-300" 
              fill="none"
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M6 18L18 6M6 6l12 12" 
              />
              ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </nav>
  );
}