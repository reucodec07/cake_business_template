import React, {JSX} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function About(): JSX.Element {
    return (
        <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-rose-100 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 lg:mb-24">
                    {/* Section Title */}
                    <div className="animate-fadeInUp">
                        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                            About {cakeBusinessConfig.business.name}
                        </h2>
                    </div>

                    {/* Business Tagline */}
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl sm:text-2xl text-amber-700 font-medium mb-8">
                            {cakeBusinessConfig.business.tagline}
                        </p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                        {/* Decorative border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 p-1 rounded-3xl">
                            <div className="bg-white rounded-3xl h-full w-full"></div>
                        </div>

                        <div className="relative p-8 lg:p-16">
                            {/* Business Description */}
                            <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12 text-center">
                                    {cakeBusinessConfig.business.description}
                                </p>
                            </div>

                            {/* Key Features/Values */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
                                <div className="text-center animate-scaleIn" style={{animationDelay: '0.6s'}}>
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-3xl text-white">♡</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Made with Love</h3>
                                    <p className="text-gray-600 leading-relaxed">Every cake is handcrafted with passion, using time-honored recipes and the finest ingredients to create memorable experiences.</p>
                                </div>

                                <div className="text-center animate-scaleIn" style={{animationDelay: '0.8s'}}>
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-3xl text-white">✦</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Creations</h3>
                                    <p className="text-gray-600 leading-relaxed">Personalized designs tailored to your vision, ensuring every celebration is as unique as you are.</p>
                                </div>

                                <div className="text-center animate-scaleIn" style={{animationDelay: '1s'}}>
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-3xl text-white">✧</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fresh Daily</h3>
                                    <p className="text-gray-600 leading-relaxed">Baked fresh every morning using premium ingredients, ensuring the highest quality and taste in every bite.</p>
                                </div>
                            </div>

                            {/* Specialties Section */}
                            <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                                <h3 className="font-script text-3xl font-semibold text-rose-600 mb-8">Our Specialties</h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {cakeBusinessConfig.business.specialties.map((specialty, index) => (
                                        <span
                                            key={index}
                                            className="px-6 py-3 bg-gradient-to-r from-rose-100 to-amber-100 text-rose-700 rounded-full font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
                                            style={{animationDelay: `${1.4 + index * 0.1}s`}}
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '1.8s'}}>
                                <div className="inline-flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-lg font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Learn More About Us
                                    </Link>

                                    <a
                                        href={`tel:${cakeBusinessConfig.business.phone}`}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <span className="mr-2">✆</span>
                                        Call Us Today
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative section */}
                <div className="mt-20 text-center animate-fadeInUp" style={{animationDelay: '2s'}}>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-rose-600 to-amber-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 bg-pattern opacity-10"></div>

                            <div className="relative">
                                <h3 className="font-script text-3xl lg:text-4xl font-bold mb-4">
                                    Sweet Memories Start Here
                                </h3>
                                <p className="text-xl mb-8 opacity-90">
                                    Let us be part of your special moments. From intimate gatherings to grand celebrations, we create cakes that make memories sweeter.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold">500+</div>
                                        <div className="text-sm opacity-80">Happy Customers</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">50+</div>
                                        <div className="text-sm opacity-80">Cake Varieties</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">5+</div>
                                        <div className="text-sm opacity-80">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">24h</div>
                                        <div className="text-sm opacity-80">Fresh Guarantee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}