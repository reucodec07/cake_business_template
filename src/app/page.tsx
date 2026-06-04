import React, {JSX} from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage(): JSX.Element {
    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />
            <Hero />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}