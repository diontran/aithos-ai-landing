
import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const lastMoveRef = useRef<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0
  });

  const updateBlobPositions = useCallback((x: number, y: number) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    const moveX = (xPercent - 0.5) * 20;
    const moveY = (yPercent - 0.5) * 20;
    const blobs = heroRef.current.querySelectorAll('.blur-blob');
    blobs.forEach(blob => {
      const element = blob as HTMLElement;
      const speedFactor = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
      element.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px) rotate(${element.dataset.rotation || '0deg'})`;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const dx = Math.abs(x - lastMoveRef.current.x);
      const dy = Math.abs(y - lastMoveRef.current.y);
      if (dx < 5 && dy < 5) return;
      lastMoveRef.current = {
        x,
        y
      };
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => updateBlobPositions(x, y));
    };
    const debouncedHandleMouseMove = debounce(handleMouseMove, 16);
    window.addEventListener('mousemove', debouncedHandleMouseMove);
    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateBlobPositions]);

  function debounce(fn: Function, ms: number) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  return <section ref={heroRef} className="min-h-screen relative flex items-center overflow-hidden pt-20">
      <BlurBlob size="xl" className="left-[10%] top-[15%] opacity-30" data-speed="1.5" data-rotation="0deg" />
      <BlurBlob size="lg" color="accent" className="right-[15%] bottom-[20%] opacity-20" data-speed="1" data-rotation="45deg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Refined Subtle Badge */}
          <div className="inline-block bg-background/30 px-5 py-2 rounded-full mb-8 animate-fade-in-up backdrop-blur-sm border border-accent/10">
            <span className="text-sm font-medium tracking-wide text-accent/90">
              AI Strategy Consultancy
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text">
            Aithos AI
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 md:mb-12 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>Transform your business with strategic AI implementation</p>
          
          {/* Key Benefits - More refined */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-10 animate-fade-in-up" style={{animationDelay: '0.25s'}}>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-5 bg-accent/60"></div>
              <span className="text-foreground/70">Innovative Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-5 bg-accent/60"></div>
              <span className="text-foreground/70">Expert Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-5 bg-accent/60"></div>
              <span className="text-foreground/70">Tailored Strategy</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <Button size="lg" variant="default" className="bg-accent/90 hover:bg-accent text-primary-foreground" asChild>
              <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2 text-black font-medium tracking-wide">
                Schedule Consultation <ArrowRight size={16} />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10" asChild>
              <a href="#services" className="flex items-center gap-2 tracking-wide">
                Discover Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
