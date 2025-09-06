import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { ClawnAI } from '@/components/ClawnAI';
import { VisionMission } from '@/components/VisionMission';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ClawnAI />
        <VisionMission />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
