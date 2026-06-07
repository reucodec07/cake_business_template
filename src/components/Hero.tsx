import React, { JSX } from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function Hero(): JSX.Element {
    const backgroundImage = cakeBusinessConfig.hero.backgroundImage ||
        '/images/hero-bakery-bg.png';

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
            <div className="absolute inset-0 bg-black/40"></div>

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


                    </div>
                </div>

            </div>
        </section>
    );
}
