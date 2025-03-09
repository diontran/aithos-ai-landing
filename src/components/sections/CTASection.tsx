
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
            Ready to work with the <span className="gradient-text">highest-rated</span> AI agency?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading companies already using our award-winning AI solutions. Book your free consultation call today and discover how our expert team can transform your business.
          </p>
          <Button 
            size="lg" 
            className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black px-8 button-bounce button-glow"
            asChild
          >
            <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2">
              Book FREE AI Consultation
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
