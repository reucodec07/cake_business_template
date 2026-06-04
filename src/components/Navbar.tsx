'use client';

import React, {JSX, useState} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Image from "next/image";
import { Phone } from 'lucide-react';

export function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logoTextColor = 'text-[#FFF8DC] hover:text-white drop-shadow-md';
    const linkTextColor = 'text-[#FFE4C4] hover:text-white drop-shadow-md';
    const underlineColor = 'bg-[#DEB887]';
    const phoneButton = 'bg-gradient-to-r from-[#D2691E] to-[#8B4513] text-white hover:from-[#CD853F] hover:to-[#A0522D] border border-[#DEB887]/30 shadow-inner';

    return (
        <nav className="fixed top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[95%] md:max-w-6xl z-50">
            
            {/* The Spoon Background SVG */}
            <svg 
                className="absolute inset-0 w-full h-full drop-shadow-2xl z-[-1]" 
                viewBox="0 0 1000 100" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5A2B" />
                        <stop offset="50%" stopColor="#A0522D" />
                        <stop offset="100%" stopColor="#5C3317" />
                    </linearGradient>
                    <linearGradient id="woodHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="20%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="80%" stopColor="rgba(0,0,0,0.1)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
                    </linearGradient>
                </defs>
                
                {/* Main Spoon Body */}
                <path d="M 150 0 C 250 0, 280 15, 310 15 L 950 15 C 990 15, 995 30, 995 50 C 995 70, 990 85, 950 85 L 310 85 C 280 85, 250 100, 150 100 C 30 100, 5 50, 5 50 C 5 50, 30 0, 150 0 Z" fill="url(#woodGradient)" />
                <path d="M 150 0 C 250 0, 280 15, 310 15 L 950 15 C 990 15, 995 30, 995 50 C 995 70, 990 85, 950 85 L 310 85 C 280 85, 250 100, 150 100 C 30 100, 5 50, 5 50 C 5 50, 30 0, 150 0 Z" fill="url(#woodHighlight)" />
                
                {/* Bowl Indentation */}
                <path d="M 140 10 C 220 10, 250 25, 250 50 C 250 75, 220 90, 140 90 C 50 90, 25 50, 25 50 C 25 50, 50 10, 140 10 Z" fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                
                {/* Handle Detail Line (Grain/Groove) */}
                <path d="M 350 50 L 900 50" stroke="rgba(0,0,0,0.15)" strokeWidth="4" strokeLinecap="round" />
                <path d="M 350 52 L 900 52" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Content Container */}
            <div className="relative z-10 flex justify-between items-center h-[90px] sm:h-[100px] px-6 md:pl-10 md:pr-8">
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
                            <Phone className="mr-2 w-4 h-4" />
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

            {/* Mobile Menu Content */}
            <div className={`md:hidden absolute top-full mt-4 w-full transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="bg-[#8B5A2B]/95 backdrop-blur-md border border-[#5C3317] shadow-xl rounded-2xl mx-auto w-[98%]">
                    <div className="px-4 py-4 space-y-2">
                        {cakeBusinessConfig.navigation.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`block px-4 py-3 text-base font-medium text-[#FFF8DC] hover:text-white hover:bg-[#A0522D]/50 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slideInLeft`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="px-4 py-2 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                            <a
                                href={`tel:${cakeBusinessConfig.business.phone}`}
                                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#D2691E] to-[#8B4513] text-white text-sm font-semibold rounded-full hover:from-[#CD853F] hover:to-[#A0522D] transition-all duration-300 shadow-lg border border-[#DEB887]/30 transform hover:scale-105"
                            >
                                <Phone className="mr-2 w-4 h-4" />
                                Call {cakeBusinessConfig.business.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}