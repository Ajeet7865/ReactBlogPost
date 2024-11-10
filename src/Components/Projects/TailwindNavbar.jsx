// Navbar.js
import React, { useState,useEffect } from "react";


const TailwindNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Create a link element for the Tailwind CSS CDN
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    
        // Clean up function to remove the link when the component unmounts
        return () => {
          document.head.removeChild(link);
        };
      }, []);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold">Brand</a>

                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
                    <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
                    <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Services</a>
                    <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 space-y-1">
                    <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Home</a>
                    <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">About</a>
                    <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Services</a>
                    <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default TailwindNavbar;
