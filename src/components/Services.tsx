import React, {JSX} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function Services(): JSX.Element {
    return (
        <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-20 w-32 h-32 bg-rose-100 rounded-full opacity-30 animate-float"></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 bg-amber-100 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-rose-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="animate-fadeInUp">
                        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                            Our Sweet Creations
                        </h2>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From elegant wedding cakes to delightful everyday treats, we craft each creation with love, care, and the finest ingredients to make your moments memorable.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {cakeBusinessConfig.services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative animate-scaleIn"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Card */}
                            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-rose-100">
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-white m-1 rounded-3xl p-8 lg:p-10">

                                    {/* Service Icon */}
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl text-white">{service.icon}</span>
                                        </div>
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300 text-center">
                                        {service.title}
                                    </h3>

                                    {/* Service Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                        {service.description}
                                    </p>

                                    {/* Price */}
                                    {service.price && (
                                        <div className="text-center mb-8">
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 text-amber-700 font-semibold rounded-full text-sm">
                                                {service.price}
                                            </span>
                                        </div>
                                    )}

                                    {/* Learn More Link */}
                                    <div className="text-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Order Now
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* Decorative corner elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Offer Section */}
                <div className="mt-20 lg:mt-32 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                    <div className="relative">
                        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 bg-pattern opacity-10"></div>

                            {/* Floating elements */}
                            <div className="absolute top-6 right-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
                            <div className="absolute bottom-8 left-12 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

                            <div className="relative text-center">
                                <h3 className="font-script text-3xl lg:text-5xl font-bold mb-6">
                                    Sweet Deals Await!
                                </h3>
                                <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                                    Ready to make your celebration extra special? Contact us today for a free consultation and let&apos;s create something magical together.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        Get Free Consultation
                                    </Link>

                                    <a
                                        href={`tel:${cakeBusinessConfig.business.phone}`}
                                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105"
                                    >
                                        <span className="mr-3">✆</span>
                                        Call {cakeBusinessConfig.business.phone}
                                    </a>
                                </div>

                                {/* Special offers */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="text-2xl mb-2">♡</div>
                                        <h4 className="font-bold mb-2">Wedding Package</h4>
                                        <p className="text-sm opacity-90">10% off for bookings made 3 months in advance</p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="text-2xl mb-2">✦</div>
                                        <h4 className="font-bold mb-2">Birthday Special</h4>
                                        <p className="text-sm opacity-90">Free custom message on all birthday cakes</p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="text-2xl mb-2">◉</div>
                                        <h4 className="font-bold mb-2">Bulk Orders</h4>
                                        <p className="text-sm opacity-90">Special pricing for corporate events</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust badges */}
                <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '1s'}}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">✦</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Premium Ingredients</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">♡</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Made Fresh Daily</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">◈</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Custom Designs</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">✧</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Local Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}