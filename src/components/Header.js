'use client';// components/Header.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <img className="h-12 w-auto" src="logo_ginger.png" alt="Hydrosol Afrique Logo" />
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLinks />
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-blue-900 text-2xl focus:outline-none">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        <NavLinks mobile />
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLinks({ mobile = false }) {
    const baseStyle = "text-sm font-medium hover:text-blue-700";
    const mobileStyle = "text-gray-700 px-3 py-2";
    const desktopStyle = "text-blue-700 px-3 py-2";
    const linkStyle = mobile ? `${baseStyle} ${mobileStyle}` : `${baseStyle} ${desktopStyle}`;

    return (
        <>
            <a href="#accueil" className="text-blue-900 px-3 py-2">Accueil</a>
            <a href="#services" className="text-gray-700 px-3 py-2">Services</a>
            <a href="#activites" className="text-gray-700 px-3 py-2">Activités</a>
            <a href="#expertise" className="text-gray-700 px-3 py-2">Expertise</a>
            <a href="#projets" className="text-gray-700 px-3 py-2">Projets</a>
            <a href="#contact" className="text-gray-700 px-3 py-2">Contact</a>
        </>
    );
}
