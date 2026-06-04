'use client';

import React, {JSX, useState} from 'react';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import Image from "next/image";

interface CakeFormData {
    name: string;
    email: string;
    phone: string;
    eventDate: string;
    eventType: string;
    guestCount: string;
    cakeType: string;
    flavorPreference: string;
    budget: string;
    message: string;
    deliveryNeeded: boolean;
}

interface ContactFormProps {
    className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps): JSX.Element {
    const [formData, setFormData] = useState<CakeFormData>({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        cakeType: '',
        flavorPreference: '',
        budget: '',
        message: '',
        deliveryNeeded: false,
    });

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checkbox = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                [name]: checkbox.checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const validFiles = files.filter(file => {
                const isValidType = file.type.startsWith('image/');
                const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
                return isValidType && isValidSize;
            });

            setUploadedFiles(prev => [...prev, ...validFiles]);
        }
    };

    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission - replace with your actual API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Cake order form data:', formData);
            console.log('Inspiration images:', uploadedFiles);

            setSubmitStatus('success');

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventDate: '',
                eventType: '',
                guestCount: '',
                cakeType: '',
                flavorPreference: '',
                budget: '',
                message: '',
                deliveryNeeded: false,
            });
            setUploadedFiles([]);

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const eventTypes = [
        'Wedding', 'Birthday', 'Baby Shower', 'Anniversary',
        'Corporate Event', 'Graduation', 'Holiday Party', 'Other'
    ];

    const cakeTypes = [
        'Multi-tiered Cake', 'Single Tier Cake', 'Sheet Cake',
        'Cupcakes', 'Cake Pops', 'Custom Design', 'Other'
    ];

    const flavorOptions = [
        'Vanilla Bean', 'Chocolate Fudge', 'Red Velvet', 'Lemon Raspberry',
        'Salted Caramel', 'Carrot Cake', 'Strawberry', 'Custom Flavor'
    ];

    const budgetRanges = [
        'Under $50', '$50 - $100', '$100 - $200', '$200 - $500',
        '$500 - $1,000', 'Over $1,000', 'Let\'s Discuss'
    ];

    return (
        <div className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden ${className}`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full opacity-40 translate-y-12 -translate-x-12"></div>

            <div className="relative">
                <div className="mb-8 text-center">
                    <h2 className="font-script text-3xl lg:text-4xl font-bold text-rose-600 mb-4">
                        Start Your Cake Order
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tell us about your upcoming event and we&apos;ll help design the perfect sweet treat for your celebration. We respond to all inquiries within 24 hours.
                    </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🎉</div>
                            <p className="text-green-800 font-bold text-lg mb-2">
                            Thank you for your cake inquiry!
                            </p>
                            <p className="text-green-700">
                            We&apos;ve received your request and will contact you within 24 hours to discuss next steps.
                            </p>
                        </div>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                        <div className="text-center">
                            <div className="text-4xl mb-2">😔</div>
                            <p className="text-red-800 font-bold text-lg mb-2">
                                Oops! Something went wrong
                            </p>
                            <p className="text-red-700">
                            We couldn&apos;t submit your request. Please try again or call us directly at {cakeBusinessConfig.business.phone}
                            </p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6">
                        <h3 className="font-script text-2xl font-bold text-rose-600 mb-6">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-6">
                        <h3 className="font-script text-2xl font-bold text-amber-600 mb-6">Project Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="eventDate" className="block text-sm font-bold text-gray-700 mb-2">
                                    Event Date *
                                </label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    required
                                    value={formData.eventDate}
                                    onChange={handleInputChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="eventType" className="block text-sm font-bold text-gray-700 mb-2">
                                    Event Type *
                                </label>
                                <select
                                    id="eventType"
                                    name="eventType"
                                    required
                                    value={formData.eventType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                >
                                    <option value="">Select event type...</option>
                                    {eventTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="guestCount" className="block text-sm font-bold text-gray-700 mb-2">
                                    Guest Count *
                                </label>
                                <input
                                    type="number"
                                    id="guestCount"
                                    name="guestCount"
                                    required
                                    min="1"
                                    value={formData.guestCount}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                    placeholder="How many guests are you expecting?"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6">
                        <h3 className="font-script text-2xl font-bold text-rose-600 mb-6">Cake Preferences</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="cakeType" className="block text-sm font-bold text-gray-700 mb-2">
                                    Cake Type *
                                </label>
                                <select
                                    id="cakeType"
                                    name="cakeType"
                                    required
                                    value={formData.cakeType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                >
                                    <option value="">Select cake type...</option>
                                    {cakeTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="flavorPreference" className="block text-sm font-bold text-gray-700 mb-2">
                                    Flavor Preference *
                                </label>
                                <select
                                    id="flavorPreference"
                                    name="flavorPreference"
                                    required
                                    value={formData.flavorPreference}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                >
                                    <option value="">Select flavor...</option>
                                    {flavorOptions.map((flavor) => (
                                        <option key={flavor} value={flavor}>{flavor}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
                                    Budget Range
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                                >
                                    <option value="">Select budget range...</option>
                                    {budgetRanges.map((range) => (
                                        <option key={range} value={range}>{range}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="deliveryNeeded"
                                    name="deliveryNeeded"
                                    checked={formData.deliveryNeeded}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 text-rose-600 bg-gray-100 border-2 border-gray-300 rounded focus:ring-rose-500 focus:ring-2"
                                />
                                <label htmlFor="deliveryNeeded" className="ml-3 text-sm font-bold text-gray-700">
                                    I need delivery
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                            Cake Details & Notes *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors resize-vertical"
                            placeholder="Tell us about your theme, design ideas, allergy restrictions, or any other details..."
                        />
                    </div>

                    {/* Inspiration Images Upload */}
                    <div>
                        <label htmlFor="fileUpload" className="block text-sm font-bold text-gray-700 mb-2">
                            Reference Files (Optional)
                        </label>
                        <div className="border-2 border-dashed border-rose-300 rounded-xl p-8 hover:border-rose-500 transition-colors bg-gradient-to-br from-rose-50/50 to-amber-50/50">
                            <input
                                type="file"
                                id="fileUpload"
                                multiple
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <label htmlFor="fileUpload" className="cursor-pointer">
                                <div className="text-center">
                                    <p className="text-lg font-semibold text-rose-600 mb-2">
                                        Upload Reference Files
                                    </p>
                                    <p className="text-gray-600">
                                        Share screenshots, mood boards, or example sites that help explain what you want
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB each</p>
                                </div>
                            </label>
                        </div>

                        {/* File Preview */}
                        {uploadedFiles.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm font-bold text-gray-700 mb-3">Uploaded Files:</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {uploadedFiles.map((file, index) => (
                                        <div key={index} className="relative group">
                                            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                                                <Image
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                ×
                                            </button>
                                            <p className="text-xs text-gray-500 mt-1 truncate">{file.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></span>
                                    Creating Your Request...
                                </>
                            ) : (
                                'Submit Cake Request'
                            )}
                        </button>

                        <a
                            href={`tel:${cakeBusinessConfig.business.phone}`}
                            className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <span className="mr-2">✆</span>
                            Call {cakeBusinessConfig.business.phone}
                        </a>
                    </div>
                </form>

                {/* Contact Info Below Form */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="font-script text-2xl font-bold text-rose-600 mb-6 text-center">Need Help? We&apos;re Here!</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                            <div className="text-3xl mb-3">✆</div>
                            <p className="font-bold text-gray-900 mb-1">Call Us</p>
                            <a href={`tel:${cakeBusinessConfig.business.phone}`} className="text-rose-600 hover:text-rose-700 font-semibold">
                                {cakeBusinessConfig.business.phone}
                            </a>
                            <p className="text-xs text-gray-500 mt-1">Immediate assistance</p>
                        </div>

                        <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl">
                            <div className="text-3xl mb-3">✉</div>
                            <p className="font-bold text-gray-900 mb-1">Email Us</p>
                            <a href={`mailto:${cakeBusinessConfig.business.email}`} className="text-rose-600 hover:text-rose-700 font-semibold text-sm">
                                {cakeBusinessConfig.business.email}
                            </a>
                            <p className="text-xs text-gray-500 mt-1">24hr response time</p>
                        </div>

                        <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
                            <div className="text-3xl mb-3">◐</div>
                            <p className="font-bold text-gray-900 mb-1">Response Time</p>
                            <p className="text-rose-600 font-semibold">Within 24 Hours</p>
                            <p className="text-xs text-gray-500 mt-1">Usually much sooner!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}