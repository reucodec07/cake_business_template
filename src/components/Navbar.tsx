'use client';

import React, {JSX, useState, useEffect} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarBg = isHome
        ? (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent')
        : 'bg-white/95 backdrop-blur-md shadow-lg';

    const logoTextColor = isHome
        ? (isScrolled ? 'text-rose-600 hover:text-rose-700' : 'text-white hover:text-rose-200')
        : 'text-rose-600 hover:text-rose-700';

    const linkTextColor = isHome
        ? (isScrolled ? 'text-gray-700 hover:text-rose-600' : 'text-white hover:text-rose-200')
        : 'text-gray-700 hover:text-rose-600';

    const underlineColor = isHome
        ? (isScrolled ? 'bg-rose-600' : 'bg-rose-200')
        : 'bg-rose-600';

    const phoneButton = isHome
        ? (isScrolled
            ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700'
            : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30')
        : 'bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Text */}
                    <div className="flex items-center space-x-2 animate-slideInLeft">
                        <Image
                            src="/favicon.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="h-12 w-12"
                        />
                        <Link
                            href="/"
                            className={`font-script text-2xl lg:text-3xl font-bold transition-colors duration-300 ${logoTextColor}`}
                        >
                            {cakeBusinessConfig.business.name}
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block animate-slideInDown">
                        <div className="flex items-center space-x-8">
                            {cakeBusinessConfig.navigation.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${linkTextColor}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${underlineColor}`}
                                    ></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="hidden lg:block animate-slideInRight">
                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${phoneButton}`}
                        >
                            <span className="mr-2">✆</span>
                            {cakeBusinessConfig.business.phone}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className={`p-2 rounded-lg transition-colors duration-300 ${linkTextColor}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="bg-white/95 backdrop-blur-md border-t border-rose-100">
                    <div className="px-4 py-4 space-y-2">
                        {cakeBusinessConfig.navigation.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`block px-4 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slideInLeft`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="px-4 py-2 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                            <a
                                href={`tel:${cakeBusinessConfig.business.phone}`}
                                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span className="mr-2">✆</span>
                                Call {cakeBusinessConfig.business.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}