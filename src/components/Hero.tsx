import React, { JSX } from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function Hero(): JSX.Element {
    const backgroundImage = cakeBusinessConfig.hero.backgroundImage ||
        'https://res.cloudinary.com/dub5eqaqo/image/upload/v1754565924/melissa-walker-horn-4on47p0-bk4-unsplash_cmeerl.jpg';

    return (
        <section
            id="home"
            className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-fixed md:bg-fixed bg-scroll"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(225, 29, 72, 0.15), rgba(146, 64, 14, 0.15)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Animated background overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-amber-900/30"></div>
                <div className="absolute inset-0 bg-pattern opacity-5"></div>
            </div>

            {/* Floating decoration elements (hidden on small screens) */}
            <div className="hidden sm:block absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-rose-200/20 rounded-full animate-float"></div>
            <div className="hidden sm:block absolute top-40 right-20 w-24 h-24 md:w-32 md:h-32 bg-amber-200/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="hidden sm:block absolute bottom-32 left-20 w-12 h-12 md:w-16 md:h-16 bg-rose-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="hidden sm:block absolute bottom-20 right-10 w-20 h-20 md:w-24 md:h-24 bg-amber-300/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                {/* Tagline */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <h2 className="font-script text-xl sm:text-2xl lg:text-4xl font-medium mb-6 sm:mb-8 text-amber-100">
                        {cakeBusinessConfig.business.tagline}
                    </h2>
                </div>

                {/* Hero Title */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-light mb-4 sm:mb-6 text-rose-100">
                        {cakeBusinessConfig.hero.title}
                    </h3>
                </div>

                {/* Hero Subtitle */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <p className="text-base sm:text-lg lg:text-2xl mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100">
                        {cakeBusinessConfig.hero.subtitle}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                        <Link
                            href={cakeBusinessConfig.hero.ctaLink}
                            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl hover:from-rose-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="relative z-10">{cakeBusinessConfig.hero.ctaText}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-amber-900 bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl hover:from-amber-200 hover:to-amber-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="mr-2 text-lg sm:text-xl">✆</span>
                            <span className="relative z-10">Call Now</span>
                        </a>
                    </div>
                </div>

                {/* Specialties showcase */}
                <div className="animate-fadeInUp mt-12 sm:mt-16" style={{ animationDelay: '1s' }}>
                    <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4">
                        {cakeBusinessConfig.business.specialties.map((specialty, index) => (
                            <span
                                key={index}
                                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                            >
                                {specialty}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center">
                    <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Discover More</p>
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            {/* Decorative corner elements - responsive sizing */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32">
                <div className="w-full h-full border-l-4 border-t-4 border-rose-300/30 rounded-tl-3xl"></div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32">
                <div className="w-full h-full border-r-4 border-t-4 border-amber-300/30 rounded-tr-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32">
                <div className="w-full h-full border-l-4 border-b-4 border-rose-300/30 rounded-bl-3xl"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32">
                <div className="w-full h-full border-r-4 border-b-4 border-amber-300/30 rounded-br-3xl"></div>
            </div>
        </section>
    );
}
