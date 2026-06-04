# 🎂 Sweet Moments Bakery - Website Template

A modern, responsive, and elegant website template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed specifically for artisanal bakeries, cake shops, and boutique patisseries.

![Project Preview](https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Dynamic Gallery:** Integrated with Cloudinary for seamless image management.
- **Custom Components:** Polished sections for Services, About Us, and a custom-designed Navbar.
- **SEO Optimized:** Dynamic metadata and JSON-LD structured data for better search ranking.
- **Interactive UI:** Smooth animations and a custom lightbox for high-quality cake showcases.
- **Easy Configuration:** Centralized business settings in `src/lib/cake-business-config.ts`.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/reucodec07/cake_business_template.git
   cd cake_business_template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root and add your Cloudinary credentials:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the site live.

## 🛠 Customization

Most of the site's content can be customized by editing `src/lib/cake-business-config.ts`. Here you can update:
- Business name, phone, and email.
- Navigation links and social media profiles.
- Service offerings and pricing.
- Theme colors and SEO metadata.

## 📦 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** Custom SVG & Lucide
- **Media:** [Cloudinary](https://cloudinary.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📄 License

This project is open-source and available under the MIT License.

---
Built with ❤️ for Sweet Moments Bakery.
