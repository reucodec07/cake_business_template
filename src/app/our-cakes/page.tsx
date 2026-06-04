import React, {JSX} from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Link from "next/link";
import { Phone, Heart } from 'lucide-react';

// Metadata for the portfolio page
export const metadata: Metadata = {
    title: `Portfolio - ${cakeBusinessConfig.business.name}`,
    description: `Browse examples of how ${cakeBusinessConfig.business.name} can be adapted for different brands, services, and launch goals.`,
    keywords: `${cakeBusinessConfig.business.name} portfolio, website template, reusable sections, ${cakeBusinessConfig.business.address.city}, flexible design`,
    openGraph: {
        title: `Portfolio - ${cakeBusinessConfig.business.name}`,
        description: `Explore how the template can be customized for different use cases and brand styles.`,
    }
};

export default function OurCakesPage(): JSX.Element {
    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
            {/* Navbar */}
            <Navbar />

            {/* Breadcrumbs */}
            <div className="pt-24 pb-8 bg-white/50 backdrop-blur-sm border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: "Portfolio" }
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
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <div className="animate-fadeInUp">
                        <h1 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Portfolio
                        </h1>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Every template tells a story, every edit makes it more yours
                        </p>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
                            Browse a few examples of how the layout can be shaped for services, launches, and portfolio-style content.
                        </p>
                    </div>
                    <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: '0.6s'}}>
                        <Link
                            href="/contact"
                            className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-colors duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Call {cakeBusinessConfig.business.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="animate-fadeInUp">
                            <h2 className="font-script text-3xl sm:text-4xl font-bold text-rose-600 mb-6">
                                Crafted with Flexibility, Shaped for Launch
                            </h2>
                        </div>
                        <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                At {cakeBusinessConfig.business.name}, every page is a starting point. From the first idea to the final polish,
                                we focus on making the template easy to edit, easy to launch, and easy to trust.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                            <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                                <div className="text-2xl font-bold text-rose-600">500+</div>
                                <div className="text-sm text-gray-600">Editable Details</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl">
                                <div className="text-2xl font-bold text-amber-600">1000+</div>
                                <div className="text-sm text-gray-600">Reusable Sections</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                                <div className="text-2xl font-bold text-rose-600">50+</div>
                                <div className="text-sm text-gray-600">Layout Variations</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl">
                                <div className="text-2xl font-bold text-amber-600">5</div>
                                <div className="text-sm text-gray-600">Core Pages</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery />

            {/* Featured Specialties Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
                            Template Highlights
                        </h2>
                        <p className="text-lg text-gray-600">
                            A few of the reusable parts that make this starter easy to adapt
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cakeBusinessConfig.business.specialties.map((specialty, index) => (
                            <div
                                key={index}
                                className="text-center bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 animate-scaleIn"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="text-white w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{specialty}</h3>
                                <p className="text-sm text-gray-600">Easy to swap and reuse across the site</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
                            From Draft to Launch
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A simple process makes it easy to move from a rough idea to a site that feels ready to share
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">1</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
                            <p className="text-sm text-gray-600">We discuss your goals, audience, and content needs</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Design</h3>
                            <p className="text-sm text-gray-600">We shape the layout and messaging around your brand</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Crafting</h3>
                            <p className="text-sm text-gray-600">We refine the copy, links, and supporting details</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">4</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Celebration</h3>
                            <p className="text-sm text-gray-600">Your template is ready to launch and grow with you</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Start Your Custom Project
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}