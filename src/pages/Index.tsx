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

// Add the ElevenLabs Voice AI Widget component
const VoiceAIWidget = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <elevenlabs-convai agent-id="Ooy8o6qQnnjoVMK8aTvZ"></elevenlabs-convai>
    </div>
  );
};

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
      <VoiceAIWidget />
    </div>
  );
};

export default Index;
