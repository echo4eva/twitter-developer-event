// app/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import SuccessfulCampaigns from '@/components/SuccessfulCampaigns';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';
import ElevatePresence from '@/components/ElevatePresence';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <HeroSection />
        <ElevatePresence />
        <SuccessfulCampaigns />
        <ContactUs />
      </main>
      <footer className="bg-gray-950 py-12 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Robot Twitter Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;