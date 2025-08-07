// src/app/api/gallery/route.ts
// API route to fetch gallery images from Cloudinary by tags

import { NextRequest, NextResponse } from 'next/server';
import {
    fetchImagesByTags,
    transformCloudinaryImage,
    CAKE_TAGS,
    type CakeCategory
} from '@/lib/cloudinary';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const categoryParam = searchParams.get('category') || 'all';
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    try {
        let images = [];

        if (categoryParam === 'all') {
            // Aggregate images from all categories
            const allTags = Object.values(CAKE_TAGS).flat();
            const rawImages = await fetchImagesByTags([...allTags], limit);
            images = rawImages.map(img => transformCloudinaryImage(img, 'all'));
        } else if (categoryParam in CAKE_TAGS) {
            const category = categoryParam as CakeCategory;
            const rawImages = await fetchImagesByTags([...CAKE_TAGS[category]], limit);
            images = rawImages.map(img => transformCloudinaryImage(img, category));
        } else {
            return NextResponse.json({
                success: false,
                error: 'Invalid category'
            }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            source: 'cloudinary',
            images
        });
    } catch (error) {
        console.error('[Gallery API] Cloudinary error:', error);

        return NextResponse.json({
            success: false,
            error: 'Failed to fetch images from Cloudinary'
        }, { status: 500 });
    }
}
