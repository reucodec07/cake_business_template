// / src/lib/cloudinary.ts
// Utility functions for generating Cloudinary URLs and fetching images by tags


const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dub5eqaqo';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export interface CloudinaryImage {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
    tags: string[];
    context?: {
        alt?: string;
        caption?: string;
    };
    created_at?: string;
}

export interface CloudinaryTransformation {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'limit' | 'mfit' | 'pad';
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    gravity?: 'center' | 'north' | 'south' | 'east' | 'west' | 'face' | 'faces';
    effects?: string[];
}

/**
 * Generate a Cloudinary image URL with transformations
 */
export function getCloudinaryUrl(
    publicId: string,
    transformations?: CloudinaryTransformation
): string {
    let transformString = '';

    if (transformations) {
        const transforms: string[] = [];

        if (transformations.width) transforms.push(`w_${transformations.width}`);
        if (transformations.height) transforms.push(`h_${transformations.height}`);
        if (transformations.crop) transforms.push(`c_${transformations.crop}`);
        if (transformations.quality) transforms.push(`q_${transformations.quality}`);
        if (transformations.format) transforms.push(`f_${transformations.format}`);
        if (transformations.gravity) transforms.push(`g_${transformations.gravity}`);
        if (transformations.effects?.length) {
            transformations.effects.forEach(effect => transforms.push(effect));
        }

        if (transforms.length > 0) {
            transformString = `/${transforms.join(',')}`;
        }
    }

    return `${CLOUDINARY_BASE_URL}/image/upload${transformString}/${publicId}`;
}

/**
 * Get gallery image with optimized settings for the gallery grid
 */
export function getGalleryImageUrl(publicId: string): string {
    return getCloudinaryUrl(publicId, {
        width: 600,
        height: 600,
        crop: 'fill',
        quality: 'auto',
        format: 'auto',
        gravity: 'center'
    });
}

/**
 * Get full-size image for modal/lightbox view
 */
export function getFullImageUrl(publicId: string): string {
    return getCloudinaryUrl(publicId, {
        width: 1200,
        quality: 'auto',
        format: 'auto',
        crop: 'limit'
    });
}

/**
 * Get hero background image with optimized settings
 */
export function getHeroImageUrl(publicId: string): string {
    return getCloudinaryUrl(publicId, {
        width: 1920,
        height: 1080,
        crop: 'fill',
        quality: 'auto',
        format: 'auto',
        gravity: 'center'
    });
}

/**
 * Get thumbnail image for small previews
 */
export function getThumbnailUrl(publicId: string): string {
    return getCloudinaryUrl(publicId, {
        width: 300,
        height: 300,
        crop: 'fill',
        quality: 'auto',
        format: 'auto',
        gravity: 'center'
    });
}

// Tag mappings for different cake categories
export const CAKE_TAGS = {
    'wedding': ['wedding-cakes', 'wedding'],
    'birthday': ['birthday-cakes', 'birthday'],
    'baby-shower': ['baby-shower', 'baby-shower-cakes'],
    'christmas': ['christmas-cakes', 'christmas', 'holiday'],
    'cupcakes': ['cupcakes', 'mini-cakes'],
    'corporate': ['corporate', 'corporate-events', 'office'],
    'graduation': ['graduation', 'graduation-cakes'],
    'anniversary': ['anniversary', 'anniversary-cakes'],
    'custom': ['custom-cakes', 'special-occasion'],
    'pastries': ['pastries', 'croissants', 'bread'],
    'desserts': ['desserts', 'cake-pops', 'macarons']
} as const;

export type CakeCategory = keyof typeof CAKE_TAGS;

/**
 * Get category display names
 */
export function getCategoryDisplayName(category: string): string {
    const categoryMap: Record<string, string> = {
        'all': 'All Work',
        'wedding': 'Signature Projects',
        'birthday': 'Launch Campaigns',
        'baby-shower': 'Client Moments',
        'christmas': 'Seasonal Updates',
        'cupcakes': 'Small Formats',
        'corporate': 'Business Sites',
        'graduation': 'Milestone Events',
        'anniversary': 'Ongoing Partnerships',
        'custom': 'Custom Builds',
        'pastries': 'Fresh Concepts',
        'desserts': 'Featured Picks',
    };
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Server-side function to fetch images by tags from Cloudinary
 * This should be called from an API route
 */
export async function fetchImagesByTags(tags: string[], maxResults: number = 20): Promise<CloudinaryImage[]> {
    if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
        console.warn('Cloudinary API credentials not found. Using fallback images.');
        return [];
    }

    try {
        const tagExpression = tags.map(tag => `tags=${tag}`).join(' OR ');
        const expression = `folder:Cakes/Gallery AND (${tagExpression})`;

        const searchUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/search`;

        // Add Basic Authentication header
        const authHeader = Buffer
            .from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`)
            .toString('base64');

        const response = await fetch(searchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${authHeader}`,
            },
            body: JSON.stringify({
                expression,
                max_results: maxResults,
                sort_by: [{ created_at: 'desc' }],  // Fixed format
                with_field: ['tags', 'context']     // Valid field
            })
        });

        if (!response.ok) {
            throw new Error(`Cloudinary API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.resources || [];

    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
        return [];
    }
}

/**
 * Transform Cloudinary image to our gallery format
 */
export function transformCloudinaryImage(cloudinaryImage: CloudinaryImage, category: string) {
    // Generate a title from the public_id or use context if available
    const title = cloudinaryImage.context?.caption ||
        cloudinaryImage.public_id
            .split('/')
            .pop()
            ?.replace(/[-_]/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') ||
        'Beautiful Cake';

    return {
        id: cloudinaryImage.public_id.replace(/[\/\s]/g, '-'),
        title,
        image: getGalleryImageUrl(cloudinaryImage.public_id),
        fullImage: getFullImageUrl(cloudinaryImage.public_id),
        category,
        publicId: cloudinaryImage.public_id,
        tags: cloudinaryImage.tags,
        created_at: cloudinaryImage.created_at || new Date().toISOString()
    };
}

/**
 * Get fallback images for a category - now uses Cloudinary with general tags
 */
export function getFallbackImages(): Array<{
    id: string;
    title: string;
    image: string;
    fullImage: string;
    category: string;
    created_at: string;
}> {
    // Instead of hardcoded images, return empty array
    // The gallery will show a proper "no images found" state
    return [];
}

/**
 * Fetch fallback images from Cloudinary using more general tags
 * This is called when specific category tags return no results
 */
export async function fetchFallbackImages(requestedCategory: CakeCategory, limit: number = 3): Promise<Array<{
    id: string;
    title: string;
    image: string;
    fullImage: string;
    category: string;
    created_at: string;
}>> {

    if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
        return [];
    }

    try {
        // Try broader tags if specific category tags don't work
        const broadTags = ['cakes', 'bakery', 'desserts', 'sweet'];
        const tagExpression = broadTags.map(tag => `tags:${tag}`).join(' OR ');
        const expression = `folder:Cakes/Gallery AND (${tagExpression})`;

        const searchUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search`;

        const timestamp = Math.round(Date.now() / 1000);
        const crypto = await import('crypto');

        const signatureParams = [
            'expression=' + encodeURIComponent(expression),
            'max_results=' + limit.toString(),
            'sort_by[0][0]=created_at',
            'sort_by[0][1]=desc',
            'timestamp=' + timestamp.toString(),
            'with_field[0]=tags',
            'with_field[1]=context'
        ];

        const paramsForSignature = signatureParams.join('&');
        const signature = crypto
            .createHash('sha1')
            .update(paramsForSignature + process.env.CLOUDINARY_API_SECRET)
            .digest('hex');

        const response = await fetch(searchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                expression,
                max_results: limit,
                sort_by: [['created_at', 'desc']] as const,
                with_field: ['tags', 'context'] as const,
                timestamp,
                signature,
                api_key: process.env.CLOUDINARY_API_KEY
            })
        });

        if (!response.ok) {
            return [];
        }

        const data = await response.json();

        return data.resources.map((resource: CloudinaryImage) =>
            transformCloudinaryImage(resource, requestedCategory)
        );

    } catch (error) {
        console.error('Error fetching fallback images from Cloudinary:', error);
        return [];
    }
}