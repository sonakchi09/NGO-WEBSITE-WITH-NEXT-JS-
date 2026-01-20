// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#111D15]">
            Divya Prakash Foundation
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-[#2e8b57]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-[#2e8b57] scroll-smooth">
              About
            </Link>
          </li>
          <li>
            <Link href="/#campaigns" className="hover:text-[#2e8b57] scroll-smooth">
              Campaigns
            </Link>
          </li>
          <li>
            <Link href="/#blogs" className="hover:text-[#2e8b57] scroll-smooth">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-[#2e8b57] scroll-smooth">
              Contact
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="rounded-md bg-[#2E8B57] px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
        >
          Donate Now
        </Link>
      </nav>
    </header>
  );
}
