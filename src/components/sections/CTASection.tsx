
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="xl" 
        className="left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-30"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-xl p-12 md:p-16 text-center max-w-4xl mx-auto border border-[#FEF7CD]/40">
          <div className="inline-block bg-[#FEF7CD]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-lg font-medium text-[#FEF7CD]">
              Complimentary Strategy Session
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Strategy Consultation</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can streamline your operations and enhance customer engagement.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#FEF7CD]"></div>
              <span>Custom AI Assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#FEF7CD]"></div>
              <span>Automation Opportunities</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#FEF7CD]"></div>
              <span>Expert Recommendations</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-[#FEF7CD]/90 hover:bg-[#FEF7CD] text-black px-8 button-bounce"
            asChild
          >
            <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2">
              Schedule Consultation
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
