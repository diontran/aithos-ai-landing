
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Pricing from '@/components/sections/Pricing';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/sections/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
