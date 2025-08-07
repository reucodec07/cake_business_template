import React, {JSX} from 'react';
import Link from 'next/link';
import { cakeBusinessConfig } from '@/lib/cake-business-config';

export function Contact(): JSX.Element {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100 rounded-full opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-rose-200 rounded-full opacity-10 animate-float" style={{animationDelay: '3s'}}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="animate-fadeInUp">
                        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                            Let&#39;s Create Something Sweet
                        </h2>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Ready to make your celebration extra special? We&#39;re here to bring your sweetest dreams to life. Contact us today for a personalized consultation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8 animate-slideInLeft">
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
                            {/* Decorative gradient border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 opacity-10"></div>

                            <div className="relative">
                                <h3 className="font-script text-3xl font-bold text-rose-600 mb-8">Get in Touch</h3>

                                {/* Phone Contact */}
                                <div className="flex items-start space-x-6 group mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl text-white">✆</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                                        <a
                                            href={`tel:${cakeBusinessConfig.business.phone}`}
                                            className="text-rose-600 hover:text-rose-700 text-lg font-semibold transition-colors duration-300"
                                        >
                                            {cakeBusinessConfig.business.phone}
                                        </a>
                                        <p className="text-gray-600 text-sm mt-1">For immediate assistance and custom orders</p>
                                    </div>
                                </div>

                                {/* Email Contact */}
                                <div className="flex items-start space-x-6 group mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl text-white">✉</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                                        <a
                                            href={`mailto:${cakeBusinessConfig.business.email}`}
                                            className="text-rose-600 hover:text-rose-700 text-lg font-semibold transition-colors duration-300 break-all"
                                        >
                                            {cakeBusinessConfig.business.email}
                                        </a>
                                        <p className="text-gray-600 text-sm mt-1">Send us details about your dream cake</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-6 group mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl text-white">◉</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Our Bakery</h4>
                                        <address className="text-gray-600 not-italic leading-relaxed">
                                            {cakeBusinessConfig.business.address.street}<br />
                                            {cakeBusinessConfig.business.address.city}, {cakeBusinessConfig.business.address.state} {cakeBusinessConfig.business.address.zip}
                                        </address>
                                        <p className="text-gray-600 text-sm mt-1">Open daily • Fresh baking starts at 6 AM</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start space-x-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl text-white">◐</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h4>
                                        <div className="text-gray-600 space-y-1">
                                            <div className="flex justify-between">
                                                <span>Monday - Friday:</span>
                                                <span className="font-medium">10:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Saturday:</span>
                                                <span className="font-medium">10:00 AM - 4:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sunday:</span>
                                                <span className="font-medium">10:00 AM - 4:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Action Cards */}
                    <div className="space-y-6 animate-slideInRight">
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/5 to-amber-400/5"></div>

                            <div className="relative">
                                <h3 className="font-script text-3xl font-bold text-amber-600 mb-8">Ready to Order?</h3>
                                <p className="text-gray-600 mb-8 text-lg">Choose the best way to reach us and we&#39;ll help you create the perfect sweet treat for your celebration.</p>

                                <div className="space-y-4">
                                    {/* Call Now Button */}
                                    <a
                                        href={`tel:${cakeBusinessConfig.business.phone}`}
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 px-6 rounded-2xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <span className="text-xl mr-3">✆</span>
                                        <span className="font-bold text-lg">Call Now: {cakeBusinessConfig.business.phone}</span>
                                    </a>

                                    {/* Send Email Button */}
                                    <a
                                        href={`mailto:${cakeBusinessConfig.business.email}?subject=Custom Cake Inquiry&body=Hello ${cakeBusinessConfig.business.name},%0D%0A%0D%0AI'm interested in ordering a custom cake.%0D%0A%0D%0AEvent Date:%0D%0AEvent Type:%0D%0ANumber of Guests:%0D%0ASpecial Requests:%0D%0A%0D%0APlease contact me to discuss the details.%0D%0A%0D%0AThank you!`}
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <span className="text-xl mr-3">✉</span>
                                        <span className="font-bold text-lg">Send Email Inquiry</span>
                                    </a>

                                    {/* Full Contact Form Button */}
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white py-4 px-6 rounded-2xl hover:from-rose-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <span className="text-xl mr-3">◈</span>
                                        <span className="font-bold text-lg">Complete Order Form</span>
                                    </Link>

                                    {/* Get Directions Button */}
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(
                                            `${cakeBusinessConfig.business.address.street}, ${cakeBusinessConfig.business.address.city}, ${cakeBusinessConfig.business.address.state} ${cakeBusinessConfig.business.address.zip}`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-6 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <span className="text-xl mr-3">◉</span>
                                        <span className="font-bold text-lg">Get Directions</span>
                                    </a>
                                </div>

                                <div className="mt-8 p-6 bg-gradient-to-r from-rose-100 to-amber-100 rounded-2xl">
                                    <div className="text-center">
                                        <p className="text-rose-700 font-bold text-lg mb-2">
                                            Free Consultation Available!
                                        </p>
                                        <p className="text-amber-700 text-sm">
                                            Contact us today to discuss your dream cake with no obligation. We love bringing sweet visions to life!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center animate-fadeInUp" style={{animationDelay: '1s'}}>
                    <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-pattern opacity-10"></div>

                        <div className="relative">
                            <h3 className="font-script text-3xl lg:text-5xl font-bold mb-6">
                                {cakeBusinessConfig.business.tagline}
                            </h3>
                            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                                Join hundreds of satisfied customers who trust <strong><em className="font-script">{cakeBusinessConfig.business.name}</em></strong> for their most special moments. Let&#39;s make your celebration unforgettable!
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Start Your Journey Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}