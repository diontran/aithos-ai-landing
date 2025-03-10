
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="xl" 
        className="left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-40"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get your <span className="gradient-text">free AI education</span> session today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team provides personalized AI education and consultation at no cost. Learn how AI can transform your business operations and drive growth.
          </p>
          <Button 
            size="lg" 
            className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black px-8 button-bounce button-glow"
            asChild
          >
            <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2">
              <GraduationCap size={16} className="mr-1" />
              Book FREE AI Education Session
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
