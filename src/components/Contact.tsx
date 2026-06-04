import React, {JSX} from 'react';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact(): JSX.Element {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-neutral-50 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="animate-fadeInUp">
                        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                            Let&#39;s Build Something Great
                        </h2>
                    </div>
                    <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Looking for the perfect custom cake? Reach out and we&apos;ll help bring your sweetest ideas to life for your special event.
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
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                                        <a
                                            href={`tel:${cakeBusinessConfig.business.phone}`}
                                            className="text-rose-600 hover:text-rose-700 text-lg font-semibold transition-colors duration-300"
                                        >
                                            {cakeBusinessConfig.business.phone}
                                        </a>
                                        <p className="text-gray-600 text-sm mt-1">For quick questions or project planning</p>
                                    </div>
                                </div>

                                {/* Email Contact */}
                                <div className="flex items-start space-x-6 group mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                                        <a
                                            href={`mailto:${cakeBusinessConfig.business.email}`}
                                            className="text-rose-600 hover:text-rose-700 text-lg font-semibold transition-colors duration-300 break-all"
                                        >
                                            {cakeBusinessConfig.business.email}
                                        </a>
                                        <p className="text-gray-600 text-sm mt-1">Send us your brief, goals, or questions</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-6 group mb-8">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Our Studio</h4>
                                        <address className="text-gray-600 not-italic leading-relaxed">
                                            {cakeBusinessConfig.business.address.street}<br />
                                            {cakeBusinessConfig.business.address.city}, {cakeBusinessConfig.business.address.state} {cakeBusinessConfig.business.address.zip}
                                        </address>
                                        <p className="text-gray-600 text-sm mt-1">Open weekdays • By appointment or drop-in</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start space-x-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h4>
                                        <div className="text-gray-600 space-y-1">
                                            <div className="flex justify-between">
                                                <span>Monday - Friday:</span>
                                                <span className="font-medium">9:00 AM - 5:30 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Saturday:</span>
                                                <span className="font-medium">Closed</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sunday:</span>
                                                <span className="font-medium">Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slideInRight">
                        <ContactForm />
                    </div>
                </div>


            </div>
        </section>
    );
}