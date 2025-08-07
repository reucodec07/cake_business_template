import React, {JSX} from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Link from "next/link";

// Metadata for the about page
export const metadata: Metadata = {
    title: `About ${cakeBusinessConfig.business.name} - ${cakeBusinessConfig.business.tagline}`,
    description: `Learn about ${cakeBusinessConfig.business.name}, our story, our passion for baking, and our commitment to creating sweet memories for every celebration.`,
    keywords: `about ${cakeBusinessConfig.business.name}, bakery story, cake shop history, ${cakeBusinessConfig.business.address.city} bakery, artisan baker`,
    openGraph: {
        title: `About ${cakeBusinessConfig.business.name} - Our Sweet Story`,
        description: `Discover the passion and craftsmanship behind ${cakeBusinessConfig.business.name}. Fresh ingredients, custom designs, and sweet memories made daily.`,
    }
};

export default function AboutPage(): JSX.Element {
    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
            {/* Navbar */}
            <Navbar />

            {/* Breadcrumbs */}
            <div className="pt-24 pb-8 bg-white/50 backdrop-blur-sm border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: "About Us" }
                        ]}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 py-16 lg:py-24 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-10 left-16 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <div className="animate-fadeInUp">
                        <h1 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our Sweet Story
                        </h1>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            {cakeBusinessConfig.business.tagline}
                        </p>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <p className="text-lg text-white/80 max-w-4xl mx-auto">
                            Discover the passion, craftsmanship, and love that goes into every cake we create at {cakeBusinessConfig.business.name}
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <About />

            {/* Our Story Section */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-20 right-10 w-48 h-48 bg-rose-100 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-script text-4xl sm:text-5xl font-bold text-rose-600 mb-6">
                                Our Journey
                            </h2>
                            <p className="text-xl text-gray-600">
                                From humble beginnings to sweet success - here&#39;s how our passion for baking became a beloved local tradition
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl">
                                    <h3 className="font-script text-2xl font-bold text-rose-600 mb-4">Our Beginning</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        What started as a passion for creating beautiful cakes for family celebrations has grown into a thriving bakery that serves our entire community. Every recipe tells a story, and every cake is crafted with the same love we put into treats for our own family.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl">
                                    <h3 className="font-script text-2xl font-bold text-amber-600 mb-4">Our Mission</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We believe every celebration deserves something special. Whether it&apos;s a child&apos;s first birthday, a dream wedding, or a simple Tuesday that needs sweetening, we&apos;re here to create moments of joy through the art of baking.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-8 rounded-2xl">
                                    <h3 className="font-script text-2xl font-bold text-rose-600 mb-4">Our Promise</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        We promise to use only the finest ingredients, time-honored techniques, and endless creativity to bring your sweetest dreams to life.
                                    </p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center">
                                            <span className="text-rose-500 mr-2">✦</span>
                                            Fresh ingredients sourced locally when possible
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-rose-500 mr-2">✦</span>
                                            Custom designs tailored to your vision
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-rose-500 mr-2">✦</span>
                                            Made fresh daily with love and care
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="bg-gradient-to-r from-rose-600 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
                                <h3 className="font-script text-3xl lg:text-4xl font-bold mb-4">
                                    Ready to Taste the Difference?
                                </h3>
                                <p className="text-xl mb-8 opacity-90">
                                    Come visit us and experience what makes {cakeBusinessConfig.business.name} special. We can&apos;t wait to be part of your next celebration!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/our-cakes"
                                        className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        See Our Cakes
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-colors duration-300"
                                    >
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-4xl font-bold text-rose-600 mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our values guide everything we do, from selecting ingredients to designing your perfect cake
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">♡</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality First</h3>
                            <p className="text-gray-600 text-sm">Premium ingredients and traditional techniques in every creation</p>
                        </div>

                        <div className="text-center bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">✦</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Creative Excellence</h3>
                            <p className="text-gray-600 text-sm">Turning your wildest cake dreams into delicious reality</p>
                        </div>

                        <div className="text-center bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">◉</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Touch</h3>
                            <p className="text-gray-600 text-sm">Every cake is crafted with personal attention and care</p>
                        </div>

                        <div className="text-center bg-white p-6 rounded-2xl shadow-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">✧</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Community Love</h3>
                            <p className="text-gray-600 text-sm">Proud to be part of your most precious moments</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}