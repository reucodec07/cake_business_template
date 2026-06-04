import React, {JSX} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import {
    Instagram,
    Facebook,
    Globe
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
    instagram: <Instagram className="w-6 h-6" />,
    facebook: <Facebook className="w-6 h-6" />,
    pinterest: (
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M12.04 2C7.51 2 4.5 5.24 4.5 9.25c0 2.39 1.26 4.49 3.32 5.27.31.13.47.07.54-.22.05-.22.18-.76.24-1 .08-.31.04-.42-.18-.69-.65-.77-1.06-1.77-1.06-3.19 0-2.45 1.85-4.65 4.81-4.65 2.62 0 4.06 1.6 4.06 3.74 0 2.82-1.25 5.2-3.11 5.2-.99 0-1.73-.81-1.49-1.8.29-1.22.84-2.54.84-3.42 0-.79-.42-1.45-1.3-1.45-1.03 0-1.86 1.06-1.86 2.49 0 .91.31 1.52.31 1.52l-1.25 5.3c-.37 1.57-.05 3.5-.02 3.69.02.13.18.17.25.06.1-.13 1.42-1.87 1.87-3.6.13-.46.74-2.85.74-2.85.36.69 1.41 1.29 2.54 1.29 3.34 0 5.6-3.02 5.6-7.08 0-3.07-2.6-5.9-6.52-5.9z" />
        </svg>
    ),
    tiktok: (
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M12.8 2c.2 2.1 1.7 3.7 3.7 3.9v2.2c-1.2-.1-2.2-.5-3.1-1v7.7c0 3.1-2.1 5.8-5.1 6.5-3.8.9-7.3-1.9-7.3-5.6 0-3.1 2.5-5.6 5.6-5.6.5 0 1 .1 1.5.2v2.5c-.4-.2-.9-.3-1.4-.3-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.5 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1V2h3z" />
        </svg>
    )
};

export function Footer(): JSX.Element {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#4a2511] text-[#fdfbf7] py-16 lg:py-20 relative mt-10">
            {/* Scalloped Frosting Border */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
                <svg className="relative block w-full h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.21,18.66,98.67,40.44,152.12,52.26,198.81,62.6,249.25,65.23,321.39,56.44Z" className="fill-[#4a2511]"></path>
                </svg>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-20 w-32 h-32 bg-[#8c4b26] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 left-16 w-24 h-24 bg-[#6e3717] rounded-full blur-2xl opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Business Information */}
                    <div className="lg:col-span-2 animate-fadeInUp">
                        <h3 className="font-script text-3xl lg:text-4xl font-bold mb-4 text-white">
                            {cakeBusinessConfig.business.name}
                        </h3>
                        <p className="text-rose-200 text-xl font-medium mb-4">
                            {cakeBusinessConfig.business.tagline}
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            {cakeBusinessConfig.business.description}
                        </p>

                        {/* Quick Contact Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`tel:${cakeBusinessConfig.business.phone}`}
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span className="mr-2 text-lg">✆</span>
                                Book a Call
                            </a>
                            <a
                                href={`mailto:${cakeBusinessConfig.business.email}`}
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span className="mr-2 text-lg">✉</span>
                                Email Us
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <h4 className="font-script text-2xl font-bold mb-6 text-rose-200">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-rose-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-rose-300">✆</span>
                                </div>
                                <a
                                    href={`tel:${cakeBusinessConfig.business.phone}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                                >
                                    {cakeBusinessConfig.business.phone}
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-amber-300">✉</span>
                                </div>
                                <a
                                    href={`mailto:${cakeBusinessConfig.business.email}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium break-all"
                                >
                                    {cakeBusinessConfig.business.email}
                                </a>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-rose-500/20 rounded-full flex items-center justify-center mt-1">
                                    <span className="text-rose-300">◉</span>
                                </div>
                                <address className="text-gray-300 not-italic leading-relaxed">
                                    {cakeBusinessConfig.business.address.street}<br />
                                    {cakeBusinessConfig.business.address.city}, {cakeBusinessConfig.business.address.state} {cakeBusinessConfig.business.address.zip}
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Services & Hours */}
                    <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <h4 className="font-script text-2xl font-bold mb-6 text-amber-200">Our Services</h4>
                        <ul className="space-y-3 mb-8">
                            {cakeBusinessConfig.services.slice(0, 4).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href="/#services"
                                        className="text-gray-300 hover:text-rose-300 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-3 text-rose-400 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                                        <span className="font-medium">{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Business Hours */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                            <h5 className="font-script text-lg font-bold text-white mb-4">Hours</h5>
                            <div className="space-y-2 text-sm text-gray-300">
                                <div className="flex justify-between">
                                    <span>Mon - Fri</span>
                                    <span className="font-medium">9AM - 5:30PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Navigation */}
                <div className="border-t border-white/20 mt-12 pt-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            {cakeBusinessConfig.navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300 font-medium relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col items-center lg:items-end">
                            <h4 className="font-script text-lg font-bold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                {cakeBusinessConfig.social.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-gradient-to-br hover:from-rose-500/40 hover:to-amber-500/40 transition-all duration-300 shadow-lg border border-white/10"
                                        title={`Follow us on ${social.platform}`}
                                    >
                                        {iconMap[social.icon.toLowerCase()] ?? <Globe className="w-6 h-6" />}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialties showcase */}
                <div className="mt-12 pt-8 border-t border-white/20 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                    <div className="text-center">
                        <h4 className="font-script text-2xl font-bold text-rose-200 mb-6">Why Choose Our Cakes</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {cakeBusinessConfig.business.specialties.map((specialty, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <p className="text-sm font-medium text-white">{specialty}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 mt-12 pt-8 animate-fadeInUp" style={{animationDelay: '1s'}}>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-center md:text-left">
                            © {currentYear} {cakeBusinessConfig.business.name}. All rights reserved. Made with ♡ for every celebration.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link>
                        </div>
                    </div>
                </div>

                {/* Final tagline */}
                <div className="text-center mt-8 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                    <p className="font-script text-lg text-rose-200 opacity-80">
                        Built to be rewritten quickly, customized easily, and launched with confidence. ♡
                    </p>
                </div>
            </div>
        </footer>
    );
}