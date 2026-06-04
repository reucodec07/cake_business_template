# Sweet Moments Bakery - Professional Next.js Website Template

A high-performance, SEO-optimized, and visually stunning website template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed specifically for artisanal bakeries, cake shops, and boutique studios, this template is built to be **cloned, configured, and launched in minutes.**

![Project Preview](https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## Key Features

- **Next.js 15 App Router:** Leveraging the latest React features for speed and efficiency.
- **Custom Artistic UI:** Unique design elements like the "Wooden Spoon" Navbar and scalloped frosting footer.
- **Cloudinary Integration:** A dynamic gallery that pulls images automatically via tags—no manual uploads to the repo required.
- **Ultra-Responsive:** Pixel-perfect layout from mobile phones to ultra-wide monitors.
- **SEO & Social Ready:** Built-in Open Graph metadata, Twitter Cards, and JSON-LD Structured Data for local business search ranking.
- **One-File Configuration:** Change the entire site's identity (name, colors, services, social links) in a single file.
- **Smooth Motion:** Purposeful animations using Tailwind and CSS transitions.

## Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router pages and API routes
│   ├── components/     # Reusable UI components (Navbar, Hero, Gallery, etc.)
│   ├── lib/            # Configuration and third-party integrations (Cloudinary)
│   └── public/         # Static assets and brand logos
├── tailwind.config.ts  # Theme and color customization
└── package.json        # Project dependencies
```

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/reucodec07/cake_business_template.git
cd cake_business_template
npm install
```

### 2. Configure Environment
Create a `.env.local` file with your Cloudinary credentials. This powers the dynamic gallery:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Launch
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site!

## Customization (The "One-File" Rule)

This template is designed to be adapted quickly. Open `src/lib/cake-business-config.ts` to update everything:

- **Business Identity:** Name, Phone, Email, and Physical Address.
- **Navigation:** Easily add or remove pages from the header.
- **Services:** Update your offerings (e.g., "Wedding Cakes", "Workshops") and pricing.
- **Social Media:** Simply paste your URLs to update all social icons in the footer.
- **Branding Colors:** Update the primary and secondary hex codes to match your brand.

## 📦 Tech Stack

- **Framework:** Next.js 15 (TypeScript)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React & Custom SVGs
- **Gallery:** Cloudinary API & `yet-another-react-lightbox`
- **Fonts:** Google Fonts (Dancing Script & Inter)

## 🌐 Deployment

### Netlify (Recommended)
This template is optimized for **Netlify**.
1. Connect your GitHub repository to Netlify.
2. Netlify will automatically detect the settings from `netlify.toml`.
3. Add your [Environment Variables](#2-configure-environment) in the Netlify UI.
4. Deploy!

### Vercel
1. Import the project into Vercel.
2. Add your environment variables.
3. Deploy!

## 🤝 Contributing


This is an open-source project! If you have ideas for new components (e.g., a "Testimonials" section or a "Booking Calendar"), feel free to:
1. **Fork** the project.
2. Create a **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes.
4. Open a **Pull Request**.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built by [Setapartpixel.design](https://setapartpixel.design) for Sweet Moments Bakery.
