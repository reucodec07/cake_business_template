import type { Metadata } from 'next';
import { Dancing_Script, Inter } from 'next/font/google';
import './globals.css';
import { cakeBusinessConfig } from '@/lib/cake-business-config';
import {JSX} from "react";

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dancing-script'
});

// SEO Metadata - pulls from cake-business-config.ts
export const metadata: Metadata = {
    title: `${cakeBusinessConfig.business.name} - ${cakeBusinessConfig.business.tagline}`,
    description: cakeBusinessConfig.business.description,
    keywords: [
        cakeBusinessConfig.business.name,
        'bakery',
        'custom cakes',
        'wedding cakes',
        'birthday cakes',
        'cupcakes',
        'pastries',
        'desserts',
        'fresh baked',
        cakeBusinessConfig.business.address.city,
        cakeBusinessConfig.business.address.state
    ].join(', '),

    // Open Graph metadata for social sharing
    openGraph: {
        title: `${cakeBusinessConfig.business.name} - ${cakeBusinessConfig.business.tagline}`,
        description: cakeBusinessConfig.business.description,
        type: 'website',
        locale: 'en_US',
        siteName: cakeBusinessConfig.business.name,
        images: [
            {
                url: cakeBusinessConfig.hero.backgroundImage || '',
                width: 1200,
                height: 630,
                alt: `${cakeBusinessConfig.business.name} - Custom Cakes & Pastries`
            }
        ]
    },

    // Twitter Card metadata
    twitter: {
        card: 'summary_large_image',
        title: `${cakeBusinessConfig.business.name} - ${cakeBusinessConfig.business.tagline}`,
        description: cakeBusinessConfig.business.description,
        images: [cakeBusinessConfig.hero.backgroundImage || '']
    },

    // Additional metadata
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Additional bakery-specific metadata
    other: {
        'business:contact_data:phone_number': cakeBusinessConfig.business.phone,
        'business:contact_data:email': cakeBusinessConfig.business.email,
        'business:contact_data:street_address': cakeBusinessConfig.business.address.street,
        'business:contact_data:locality': cakeBusinessConfig.business.address.city,
        'business:contact_data:region': cakeBusinessConfig.business.address.state,
        'business:contact_data:postal_code': cakeBusinessConfig.business.address.zip,
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en" className={`scroll-smooth ${dancingScript.variable}`}>
        <head>
            {/* Structured Data for Bakery Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Bakery',
                        name: cakeBusinessConfig.business.name,
                        description: cakeBusinessConfig.business.description,
                        telephone: cakeBusinessConfig.business.phone,
                        email: cakeBusinessConfig.business.email,
                        url: typeof window !== 'undefined' ? window.location.origin : '',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: cakeBusinessConfig.business.address.street,
                            addressLocality: cakeBusinessConfig.business.address.city,
                            addressRegion: cakeBusinessConfig.business.address.state,
                            postalCode: cakeBusinessConfig.business.address.zip,
                        },
                        openingHours: [
                            'Mo-Fr 07:00-19:00',
                            'Sa 08:00-18:00',
                            'Su 09:00-16:00'
                        ],
                        priceRange: '$$',
                        servesCuisine: ['Desserts', 'Bakery'],
                        hasMenu: true,
                        acceptsReservations: false,
                        paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
                        currenciesAccepted: 'USD',
                        sameAs: cakeBusinessConfig.social.map(social => social.url),
                        makesOffer: cakeBusinessConfig.services.map(service => ({
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Product',
                                name: service.title,
                                description: service.description
                            }
                        }))
                    }),
                }}
            />

            {/* Preload hero image */}
            {cakeBusinessConfig.hero.backgroundImage && (
                <link
                    rel="preload"
                    as="image"
                    href={cakeBusinessConfig.hero.backgroundImage}
                />
            )}

            {/* Theme color for mobile browsers */}
            <meta name="theme-color" content={cakeBusinessConfig.colors.primary} />
        </head>
        <body className={`${inter.className} antialiased bg-gradient-to-br from-rose-50 via-white to-amber-50`}>
        {children}
        </body>
        </html>
    );
}