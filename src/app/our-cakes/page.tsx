import React, {JSX} from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Link from "next/link";

// Metadata for the cakes page
export const metadata: Metadata = {
    title: `Our Cakes - ${cakeBusinessConfig.business.name} Gallery`,
    description: `Browse our stunning collection of custom cakes, wedding cakes, birthday cakes, cupcakes, and specialty desserts at ${cakeBusinessConfig.business.name}. Fresh, handcrafted, and made with love.`,
    keywords: `${cakeBusinessConfig.business.name} cakes, cake gallery, wedding cakes, birthday cakes, custom cakes, cupcakes, ${cakeBusinessConfig.business.address.city} bakery gallery`,
    openGraph: {
        title: `Our Sweet Creations - ${cakeBusinessConfig.business.name}`,
        description: `Explore our gallery of beautiful custom cakes, from elegant weddings to fun birthdays. See why ${cakeBusinessConfig.business.name} is the premier choice for celebrations.`,
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
                            { label: "Our Cakes" }
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
                            Our Sweet Creations
                        </h1>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Every cake tells a story, every bite creates a memory
                        </p>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
                            Browse our gallery of handcrafted cakes, from elegant weddings to joyful birthdays. Each creation is made fresh with premium ingredients and endless love.
                        </p>
                    </div>
                    <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: '0.6s'}}>
                        <Link
                            href="/contact"
                            className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Order Your Dream Cake
                        </Link>
                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            <span className="mr-2">✆</span>
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
                                Crafted with Passion, Served with Pride
                            </h2>
                        </div>
                        <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                At {cakeBusinessConfig.business.name}, every cake is a work of art. From the first sketch to the final decoration,
                                we pour our hearts into creating something truly special for your celebration. Browse our gallery to see the magic we can create for you.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                            <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                                <div className="text-2xl font-bold text-rose-600">500+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl">
                                <div className="text-2xl font-bold text-amber-600">1000+</div>
                                <div className="text-sm text-gray-600">Cakes Created</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                                <div className="text-2xl font-bold text-rose-600">50+</div>
                                <div className="text-sm text-gray-600">Unique Flavors</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl">
                                <div className="text-2xl font-bold text-amber-600">5</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
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
                            Our Specialties
                        </h2>
                        <p className="text-lg text-gray-600">
                            What makes our cakes truly special
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
                                    <span className="text-white text-xl">♡</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{specialty}</h3>
                                <p className="text-sm text-gray-600">Custom designed and crafted with care</p>
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
                            From Dream to Delicious
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our simple process ensures your perfect cake, from initial consultation to the final sweet bite
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">1</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
                            <p className="text-sm text-gray-600">We discuss your vision, flavors, and design preferences</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Design</h3>
                            <p className="text-sm text-gray-600">Our artists create a custom design just for you</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Crafting</h3>
                            <p className="text-sm text-gray-600">We bake and decorate with premium ingredients and care</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">4</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Celebration</h3>
                            <p className="text-sm text-gray-600">Your perfect cake is ready to make memories!</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Start Your Custom Cake Journey
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}