// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link href="/" className="text-white text-3xl font-extrabold tracking-wide hover:text-blue-200 transition-colors duration-300">
          HealthPredict AI
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
            About Us
          </Link>
          {/*
            If you decide to re-enable the predict page later,
            uncomment the line below:
          */}
          {/*
          <Link href="/predict" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
            Predict
          </Link>
          */}
          <Link href="/contact" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}