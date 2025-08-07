import React, {JSX} from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Link from "next/link";

// Metadata for the contact page
export const metadata: Metadata = {
    title: `Order Your Dream Cake - ${cakeBusinessConfig.business.name}`,
    description: `Place your custom cake order with ${cakeBusinessConfig.business.name}. Wedding cakes, birthday cakes, cupcakes, and more. Fresh ingredients, custom designs, local delivery available.`,
    keywords: `order cake ${cakeBusinessConfig.business.name}, custom cake order, wedding cake order, birthday cake, ${cakeBusinessConfig.business.address.city} bakery, ${cakeBusinessConfig.business.phone}`,
    openGraph: {
        title: `Order Your Dream Cake - ${cakeBusinessConfig.business.name}`,
        description: `Place your custom cake order with ${cakeBusinessConfig.business.name}. Fresh ingredients, custom designs, local delivery available.`,
    }
};

export default function ContactPage(): JSX.Element {
    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
            {/* Navbar */}
            <Navbar />

            {/* Breadcrumbs */}
            <div className="pt-24 pb-8 bg-white/50 backdrop-blur-sm border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: "Order Your Cake" }
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
                            Order from {cakeBusinessConfig.business.name}
                        </h1>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            {cakeBusinessConfig.business.tagline}
                        </p>
                    </div>
                    <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: '0.4s'}}>
                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <span className="mr-2">✆</span>
                            Call {cakeBusinessConfig.business.phone}
                        </a>
                        <a
                            href={`mailto:${cakeBusinessConfig.business.email}`}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-rose-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            <span className="mr-2">✉</span>
                            Email Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm />
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-20 right-10 w-48 h-48 bg-rose-100 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
                            Visit Our Sweet Bakery
                        </h2>
                        <p className="text-lg text-gray-600">
                            Experience the magic in person! Stop by our bakery to see, smell, and taste the difference of fresh-baked goodness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 lg:p-12 rounded-3xl">
                            <h3 className="font-script text-2xl font-bold text-rose-600 mb-8">Bakery Information</h3>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center">
                                        <span className="text-xl text-white">◉</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
                                        <address className="text-gray-600 not-italic">
                                            {cakeBusinessConfig.business.address.street}<br />
                                            {cakeBusinessConfig.business.address.city}, {cakeBusinessConfig.business.address.state} {cakeBusinessConfig.business.address.zip}
                                        </address>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
                                        <span className="text-xl text-white">✆</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                                        <a
                                            href={`tel:${cakeBusinessConfig.business.phone}`}
                                            className="text-rose-600 hover:text-rose-800 text-lg font-semibold"
                                        >
                                            {cakeBusinessConfig.business.phone}
                                        </a>
                                        <p className="text-sm text-gray-500">Available during business hours</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center">
                                        <span className="text-xl text-white">✉</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                                        <a
                                            href={`mailto:${cakeBusinessConfig.business.email}`}
                                            className="text-rose-600 hover:text-rose-800 text-lg font-semibold break-all"
                                        >
                                            {cakeBusinessConfig.business.email}
                                        </a>
                                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours & Services */}
                        <div className="space-y-8">
                            {/* Business Hours */}
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-rose-100">
                                <h3 className="font-script text-2xl font-bold text-amber-600 mb-6">Bakery Hours</h3>
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Monday - Friday</span>
                                        <span className="font-bold text-rose-600">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Saturday</span>
                                        <span className="font-bold text-rose-600">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Sunday</span>
                                        <span className="font-bold text-rose-600">10:00 AM - 4:00 PM</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-gradient-to-r from-rose-100 to-amber-100 rounded-xl">
                                    <p className="text-sm text-rose-700 font-medium text-center">
                                        Fresh baking starts at 6 AM daily!
                                    </p>
                                </div>
                            </div>

                            {/* Special Notice */}
                            <div className="bg-gradient-to-r from-rose-600 to-amber-600 p-8 rounded-3xl text-white">
                                <h3 className="font-script text-2xl font-bold mb-4">Planning Ahead?</h3>
                                <p className="mb-4">
                                    For wedding cakes and large orders, we recommend placing your order at least 2-3 weeks in advance to ensure availability and perfect execution.
                                </p>
                                <Link
                                    href="/#services"
                                    className="inline-block bg-white text-rose-600 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-script text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
                            Sweet Questions & Answers
                        </h2>
                        <p className="text-lg text-gray-600">
                            Common questions about ordering from {cakeBusinessConfig.business.name}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">How far in advance should I order?</h3>
                            <p className="text-gray-600">For custom cakes, we recommend 1-2 weeks notice. Wedding cakes require 3-4 weeks. However, we can often accommodate shorter notice for simpler designs.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer delivery?</h3>
                            <p className="text-gray-600">Yes! We offer local delivery within 15 miles for a small fee. We also provide setup service for wedding and event cakes to ensure they arrive perfect.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Can you accommodate dietary restrictions?</h3>
                            <p className="text-gray-600">Absolutely! We offer gluten-free, dairy-free, sugar-free, and vegan options. Just let us know your needs when placing your order.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What&#39;s included in a consultation?</h3>
                            <p className="text-gray-600">Our free consultation includes design discussion, flavor tasting (for orders over $100), pricing, and timeline planning. We want your cake to be perfect!</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Do you require a deposit?</h3>
                            <p className="text-gray-600">Yes, we require a 50% deposit to secure your order date, with the balance due at pickup or delivery. We accept cash, card, and digital payments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}