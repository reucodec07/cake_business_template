// src/lib/cake-business-config.ts
// Central configuration file for cake shop business template
// Update this file to customize the entire website for different cake shop clients


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
        name: "2 Have & 2 Eat Cakes",
        tagline: "Where Every Bite is Pure Bliss",
        description: "We are a family-owned bakery specializing in custom cakes, cupcakes, and pastries made fresh daily with the finest ingredients. From wedding cakes to birthday celebrations, we create sweet memories that last a lifetime.",
        phone: "0752 108 2100",
        email: "cakes2haven2eat@hotmail.com",
        address: {
            street: "The Old Armoury",
            city: "Market Drayton",
            state: "Staffordshire",
            zip: "TF9 3DH"
        },
        specialties: [
            "Custom Wedding Cakes",
            "Birthday Celebrations",
            "Corporate Events",
            "Seasonal Specialties"
        ]
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Our Cakes", href: "/our-cakes" },
        { label: "Order Now", href: "/contact" }
    ],
    hero: {
        title: "Handcrafted with Love, Delivered with Joy",
        subtitle: "Transform your special moments into sweet memories with our artisanal cakes and pastries, made fresh daily using premium ingredients and traditional techniques",
        ctaText: "Order Your Dream Cake",
        ctaLink: "/contact",
        backgroundImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    services: [
        {
            id: "wedding-cakes",
            title: "Wedding Cakes",
            description: "Elegant multi-tier wedding cakes customized to match your special day. From classic vanilla to exotic flavors, we create the perfect centerpiece for your celebration.",
            icon: "♡",
            price: "Starting at £299"
        },
        {
            id: "birthday-cakes",
            title: "Birthday Cakes",
            description: "Fun and festive birthday cakes for all ages. Choose from our signature designs or work with us to create something completely unique for your loved one.",
            icon: "✦",
            price: "Starting at £145"
        },
        {
            id: "cupcakes",
            title: "Gourmet Cupcakes",
            description: "Individual treats perfect for any occasion. Available in dozens of flavors with buttercream, cream cheese, or chocolate ganache frosting.",
            icon: "◉",
            price: "Starting at £10 each"
        },
        {
            id: "custom-cakes",
            title: "Custom Cakes",
            description: "Specialty desserts including cake pops, macarons, cookies, and seasonal treats. Perfect for corporate events, parties, and gift giving.",
            icon: "❋",
            price: "Custom pricing"
        },
        {
            id: "pastries",
            title: "Fresh Pastries",
            description: "Daily fresh croissants, danishes, muffins, and artisan breads. Made with European techniques and the finest local ingredients.",
            icon: "✧",
            price: "Starting at £10.50"
        },
        {
            id: "corporate-catering",
            title: "Corporate Catering",
            description: "Professional dessert catering for office meetings, corporate events, and business celebrations. Includes delivery and setup services.",
            icon: "◈",
            price: "Custom packages"
        }
    ],
    social: [
        {
            platform: "Instagram",
            url: "https://instagram.com/cakes2haven2eat",
            icon: "instagram"
        },
        {
            platform: "Facebook",
            url: "https://facebook.com/cakes2haven2eat",
            icon: "facebook"
        },
        {
            platform: "Pinterest",
            url: "https://pinterest.com/cakes2haven2eat",
            icon: "pinterest"
        },
        {
            platform: "TikTok",
            url: "https://tiktok.com/@cakes2haven2eat",
            icon: "tiktok"
        }
    ],
    colors: {
        primary: "#E11D48", // Rose/Pink - represents sweetness, cakes, frosting
        secondary: "#92400E", // Warm brown - represents chocolate, warmth, comfort
        primaryLight: "#FDF2F8", // Very light pink
        secondaryLight: "#FEF3C7", // Light cream/yellow
        primaryDark: "#881337", // Dark rose
        secondaryDark: "#451A03" // Dark brown
    },
    // Gallery categories - images will be loaded dynamically from Cloudinary by tags
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