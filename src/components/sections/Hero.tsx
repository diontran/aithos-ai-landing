
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation effect for tracking mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left; // x position within the element
      const y = clientY - rect.top; // y position within the element
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Calculate movement effect (subtle parallax)
      const moveX = (xPercent - 0.5) * 20; // -10px to 10px movement
      const moveY = (yPercent - 0.5) * 20; // -10px to 10px movement
      
      // Apply to blob positions
      const blobs = heroRef.current.querySelectorAll('.blur-blob');
      blobs.forEach((blob) => {
        const element = blob as HTMLElement;
        const speedFactor = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
        element.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px) rotate(${element.dataset.rotation || '0deg'})`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <BlurBlob 
        size="xl" 
        className="left-[10%] top-[15%] opacity-40"
        data-speed="1.5"
        data-rotation="0deg"
      />
      <BlurBlob 
        size="lg" 
        color="accent" 
        className="right-[15%] bottom-[20%] opacity-30"
        data-speed="1"
        data-rotation="45deg"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-aithos-blue/20 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up backdrop-blur-sm border border-aithos-blue/20">
            <span className="text-sm font-medium text-foreground">
              AI Automation for Modern Businesses
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Aithos AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Make your business a profit powerhouse with AI automation solutions that save time and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-aithos-blue hover:bg-aithos-blue/90 text-primary-foreground button-bounce button-glow"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Book Demo Call
                <ArrowRight size={16} />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-aithos-blue/30 hover:bg-aithos-blue/10 button-bounce"
              asChild
            >
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/10">
            <div className="p-1">
              <div className="h-96 bg-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-aithos-blue/20 to-aithos-accent/10">
                  <p className="text-xl text-aithos-accent font-semibold">Aithos AI Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
