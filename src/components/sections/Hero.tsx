
import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock, Zap } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const lastMoveRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Optimized animation effect for tracking mouse movement
  const updateBlobPositions = useCallback((x: number, y: number) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    
    // Calculate movement effect (subtle parallax)
    const moveX = (xPercent - 0.5) * 20;
    const moveY = (yPercent - 0.5) * 20;
    
    // Apply to blob positions
    const blobs = heroRef.current.querySelectorAll('.blur-blob');
    blobs.forEach((blob) => {
      const element = blob as HTMLElement;
      const speedFactor = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
      element.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px) rotate(${element.dataset.rotation || '0deg'})`;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Only update if mouse has moved significantly (more than 5 pixels)
      const dx = Math.abs(x - lastMoveRef.current.x);
      const dy = Math.abs(y - lastMoveRef.current.y);
      if (dx < 5 && dy < 5) return;

      lastMoveRef.current = { x, y };

      // Use requestAnimationFrame for smooth animation
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => updateBlobPositions(x, y));
    };

    const debouncedHandleMouseMove = debounce(handleMouseMove, 16); // ~60fps
    window.addEventListener('mousemove', debouncedHandleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateBlobPositions]);

  // Debounce utility function
  function debounce(fn: Function, ms: number) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

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
          <div className="inline-block bg-[#FEF7CD]/20 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up backdrop-blur-sm border border-[#FEF7CD]/20">
            <span className="text-sm font-medium text-foreground">
              Hire AI Employees for Your Business
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            AI Employees
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hire virtual AI staff that work 24/7. Automate tasks, reduce costs, and scale your business without hiring more people.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Users className="w-5 h-5 text-accent" />
              <span>No Hiring Process</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-accent" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Zap className="w-5 h-5 text-accent" />
              <span>Instant Deployment</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-primary-foreground button-bounce button-glow"
              asChild
            >
              <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2 text-black">
                Hire AI Employee
                <ArrowRight size={16} />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FEF7CD]/30 hover:bg-[#FEF7CD]/10 button-bounce"
              asChild
            >
              <a href="#services">
                View AI Roles
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
