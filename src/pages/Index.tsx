
import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/sections/Chatbot';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('@/components/sections/Services'));
const Process = lazy(() => import('@/components/sections/Process'));
const CaseStudies = lazy(() => import('@/components/sections/CaseStudies'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Team = lazy(() => import('@/components/sections/Team'));
const Pricing = lazy(() => import('@/components/sections/Pricing'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

// Optimized Voice AI Widget with lazy loading and error boundary
const VoiceAIWidget = React.memo(() => {
  const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    // Defer script loading slightly to not compete with critical resources
    const timeoutId = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => setIsScriptLoaded(true);
      script.onerror = (error) => console.error('Failed to load Voice AI Widget:', error);
      
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        clearTimeout(timeoutId);
      };
    }, 2000); // Delay loading by 2 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isScriptLoaded) return null;

  // Using the custom element with proper JSX typing
  return (
    <div className="fixed bottom-24 right-4 z-50">
      <elevenlabs-convai agent-id="Ooy8o6qQnnjoVMK8aTvZ"></elevenlabs-convai>
    </div>
  );
});

VoiceAIWidget.displayName = 'VoiceAIWidget';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <Process />
          <CaseStudies />
          <Testimonials />
          <Team />
          <Pricing />
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <VoiceAIWidget />
      <Chatbot />
    </div>
  );
};

export default React.memo(Index);
