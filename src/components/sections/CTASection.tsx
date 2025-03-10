
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="xl" 
        className="left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-40"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-xl p-12 md:p-16 text-center max-w-4xl mx-auto border-2 border-[#FEF7CD]">
          <div className="inline-block bg-green-500/20 px-4 py-1.5 rounded-full mb-6">
            <span className="text-lg font-bold text-white">
              <span className="text-green-400">100% FREE</span> - NO OBLIGATION
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="gradient-text">FREE AI Strategy Session</span> Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team will identify specific automation opportunities that can <span className="font-bold text-white">save you hours every week</span>.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="text-green-500" size={24} />
              <span>Custom AI Roadmap</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="text-green-500" size={24} />
              <span>Time-Saving Automation</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="text-green-500" size={24} />
              <span>Expert AI Guidance</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black px-8 button-bounce button-glow"
            asChild
          >
            <a href="https://zcal.co/diontran/30min" className="flex items-center gap-2">
              <GraduationCap size={16} className="mr-1" />
              <span className="font-bold">👉</span> BOOK FREE 30-MIN STRATEGY CALL <span className="font-bold">👈</span>
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
