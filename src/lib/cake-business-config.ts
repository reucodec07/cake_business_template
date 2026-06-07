// src/lib/cake-business-config.ts
// Central configuration file for the template site
// Update this file to customize the entire website in one place


export interface CakeBusinessConfig {
    business: {
        name: string;
        tagline: string;
        description: string;
        phone: string;
        email: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: string;
        };
        specialties: string[];
    };
    navigation: {
        label: string;
        href: string;
    }[];
    hero: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        backgroundImage?: string;
    };
    services: {
        id: string;
        title: string;
        description: string;
        icon: string;
        price?: string;
    }[];
    social: {
        platform: string;
        url: string;
        icon: string;
    }[];
    colors: {
        primary: string;
        secondary: string;
        primaryLight: string;
        secondaryLight: string;
        primaryDark: string;
        secondaryDark: string;
    };
    galleryCategories: string[];
}

export const cakeBusinessConfig: CakeBusinessConfig = {
    business: {
        name: "Sweet Moments Bakery",
        tagline: "Artisan Cakes for Every Occasion",
        description: "Beautiful, custom-designed cakes baked from scratch using the finest ingredients. From elegant wedding centerpieces to fun birthday treats, we make your sweetest dreams come true.",
        phone: "(555) 123-4567",
        email: "hello@sweetmomentsbakery.example.com",
        address: {
            street: "123 Baker Street",
            city: "Sweetville",
            state: "CA",
            zip: "90210"
        },
        specialties: [
            "Custom Cakes",
            "Wedding Tiers",
            "Fresh Pastries",
            "Gluten-Free Options"
        ]
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/our-cakes" },
        { label: "Contact", href: "/contact" }
    ],
    hero: {
        title: "Make Your Celebration Sweeter",
        subtitle: "Explore our gallery of custom designs and order the perfect centerpiece for your next big event.",
        ctaText: "Order Your Cake",
        ctaLink: "/contact",
        backgroundImage: "/images/hero-bakery-bg.png"
    },
    services: [
        {
            id: "wedding-cakes",
            title: "Wedding Cakes",
            description: "Elegant, multi-tiered masterpieces designed to be the breathtaking centerpiece of your special day.",
            icon: "W",
            price: "From $300"
        },
        {
            id: "custom-birthday",
            title: "Custom Birthday Cakes",
            description: "Fun, themed, and incredibly delicious cakes tailored to the birthday person's unique personality and taste.",
            icon: "B",
            price: "From $85"
        },
        {
            id: "cupcakes-pastries",
            title: "Cupcakes & Pastries",
            description: "Perfectly portioned treats in a variety of flavors, great for parties, office events, or a sweet afternoon pick-me-up.",
            icon: "C",
            price: "From $35/dz"
        },
        {
            id: "dessert-tables",
            title: "Dessert Tables",
            description: "A beautifully curated selection of miniature desserts, cake pops, cookies, and treats for your guests.",
            icon: "D",
            price: "Custom Pricing"
        },
        {
            id: "corporate-events",
            title: "Corporate Events",
            description: "Branded cupcakes, large sheet cakes, and professional desserts perfect for company milestones.",
            icon: "E",
            price: "Custom Pricing"
        },
        {
            id: "tasting-boxes",
            title: "Tasting Boxes",
            description: "Sample our most popular cake and frosting combinations before committing to your final event order.",
            icon: "T",
            price: "$25/box"
        }
    ],
    social: [
        {
            platform: "Instagram",
            url: "https://instagram.com/sweetmomentsbakery",
            icon: "instagram"
        },
        {
            platform: "Facebook",
            url: "https://facebook.com/sweetmomentsbakery",
            icon: "facebook"
        },
        {
            platform: "Pinterest",
            url: "https://pinterest.com/sweetmomentsbakery",
            icon: "pinterest"
        },
        {
            platform: "TikTok",
            url: "https://tiktok.com/@sweetmomentsbakery",
            icon: "tiktok"
        }
    ],
    colors: {
        primary: "#E11D48",
        secondary: "#92400E",
        primaryLight: "#FDF2F8",
        secondaryLight: "#FEF3C7",
        primaryDark: "#881337",
        secondaryDark: "#451A03"
    },
    // Gallery categories - images are loaded dynamically from Cloudinary by tags
    galleryCategories: [
        'wedding',
        'birthday',
        'baby-shower',
        'christmas',
        'cupcakes',
        'corporate',
        'graduation',
        'anniversary',
        'custom',
        'pastries',
        'desserts'
    ]
};