'use client';

import React, {JSX, useState, useEffect} from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { cakeBusinessConfig } from '@/lib/cake-business-config';
import { getCategoryDisplayName } from '@/lib/cloudinary';
import Image from "next/image";
import { Frown, Cake } from 'lucide-react';

interface GalleryImage {
    id: string;
    title: string;
    image: string;
    fullImage?: string;
    category: string;
}

export function Gallery(): JSX.Element {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeImageId, setActiveImageId] = useState<string | null>(null);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const categories = ['all', ...cakeBusinessConfig.galleryCategories];

    const fetchImages = async (category: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/gallery?category=${category}&limit=20`);
            const data = await response.json();

            if (data.success) {
                setImages(data.images);
                if (data.source === 'fallback') {
                    console.log('Using fallback images - check Cloudinary configuration');
                }
            } else {
                setError('Failed to load gallery images');
            }
        } catch (err) {
            console.error('Error fetching gallery images:', err);
            setError('Failed to load gallery images');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(selectedCategory);
    }, [selectedCategory]);

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(image => image.category === selectedCategory);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const handleImageTouch = (imageId: string) => {
        setActiveImageId(imageId);
        // Remove active state after a short delay
        setTimeout(() => setActiveImageId(null), 300);
    };

    return (
        <>
            {/* Add custom styles for mobile interactions */}
            <style jsx>{`
                .gallery-item {
                    transition: all 0.3s ease;
                }
                
                .gallery-item.active,
                .gallery-item:active {
                    transform: translateY(-4px) scale(1.02);
                }
                
                .gallery-item-image {
                    transition: transform 0.5s ease;
                }
                
                .gallery-item.active .gallery-item-image,
                .gallery-item:active .gallery-item-image {
                    transform: scale(1.1);
                }
                
                .gallery-overlay {
                    transition: opacity 0.3s ease;
                    opacity: 0;
                }
                
                .gallery-item.active .gallery-overlay,
                .gallery-item:active .gallery-overlay {
                    opacity: 1;
                }
                
                .gallery-button {
                    transition: all 0.3s ease;
                    opacity: 0;
                }
                
                .gallery-item.active .gallery-button,
                .gallery-item:active .gallery-button {
                    opacity: 1;
                }
                
                .gallery-corners {
                    transition: opacity 0.3s ease;
                    opacity: 0;
                }
                
                .gallery-item.active .gallery-corners,
                .gallery-item:active .gallery-corners {
                    opacity: 1;
                }
                
                /* Desktop hover effects */
                @media (hover: hover) {
                    .gallery-item:hover {
                        transform: translateY(-12px);
                    }
                    
                    .gallery-item:hover .gallery-item-image {
                        transform: scale(1.1);
                    }
                    
                    .gallery-item:hover .gallery-overlay {
                        opacity: 1;
                    }
                    
                    .gallery-item:hover .gallery-button {
                        opacity: 1;
                    }
                    
                    .gallery-item:hover .gallery-corners {
                        opacity: 1;
                    }
                }
                
                /* Mobile-specific styles */
                @media (hover: none) {
                    .gallery-item {
                        cursor: pointer;
                        -webkit-tap-highlight-color: transparent;
                    }
                }
            `}</style>

            <section id="gallery" className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-10 right-20 w-40 h-40 bg-rose-100 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-32 left-16 w-32 h-32 bg-amber-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="animate-fadeInUp">
                            <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-600 mb-6">
                                Portfolio
                            </h2>
                        </div>
                        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Browse a few examples of how this template can be adapted for different brands, offers, and content styles.
                            </p>
                        </div>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-rose-100 hover:to-amber-100 hover:text-rose-600 border-2 border-gray-200 active:bg-gradient-to-r active:from-rose-100 active:to-amber-100 active:text-rose-600'
                                }`}
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                {getCategoryDisplayName(category)}
                            </button>
                        ))}
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mb-4"></div>
                                <p className="text-gray-600 text-lg">Loading portfolio items...</p>
                            </div>
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div className="text-center py-20">
                            <div className="flex justify-center mb-4">
                                <Frown className="w-16 h-16 text-rose-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h3>
                            <p className="text-gray-600 mb-6">{error}</p>
                            <button
                                onClick={() => fetchImages(selectedCategory)}
                                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 active:scale-95 transition-all duration-300"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Empty */}
                    {!loading && !error && filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <div className="flex justify-center mb-4">
                                <Cake className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">No items found</h3>
                            <p className="text-gray-600 mb-6">
                                We haven&apos;t added any {selectedCategory === 'all' ? '' : getCategoryDisplayName(selectedCategory).toLowerCase()} items yet.
                            </p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 active:scale-95 transition-all duration-300"
                            >
                                View All Work
                            </button>
                        </div>
                    )}

                    {/* Gallery Grid */}
                    {!loading && !error && filteredImages.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {filteredImages.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`gallery-item relative animate-scaleIn ${
                                        activeImageId === item.id ? 'active' : ''
                                    }`}
                                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                                >
                                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500">
                                        <div
                                            className="aspect-square overflow-hidden relative cursor-pointer"
                                            onClick={() => handleImageClick(index)}
                                            onTouchStart={() => handleImageTouch(item.id)}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                className="gallery-item-image object-cover"
                                            />
                                        </div>

                                        <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-white/90 text-sm capitalize">
                                                    {getCategoryDisplayName(item.category)}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleImageClick(index)}
                                            onTouchStart={() => handleImageTouch(item.id)}
                                            className="gallery-button absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 active:bg-white/40"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>

                                        <div className="gallery-corners absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-rose-400 rounded-tl-3xl"></div>
                                        <div className="gallery-corners absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-amber-400 rounded-br-3xl"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={currentIndex}
                    slides={filteredImages.map(img => ({
                        src: img.fullImage || img.image,
                        title: img.title,
                    }))}
                />
            </section>
        </>
    );
}