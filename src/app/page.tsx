// app/page.tsx
import React from 'react';
import SuccessfulCampaigns from '@/components/SuccessfulCampaigns';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';
import ElevatePresence from '@/components/ElevatePresence';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <ElevatePresence />
        <SuccessfulCampaigns />
        <ContactUs />
      </main>
    </div>
  );
};

export default LandingPage;