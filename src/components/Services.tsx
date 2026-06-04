import React, {JSX} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function Services(): JSX.Element {
    return (
        <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="animate-fadeInUp">
                        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                            What We Offer
                        </h2>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Everything here is designed to help you launch a polished template quickly, with clear sections, reusable components, and focused messaging.
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


                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}