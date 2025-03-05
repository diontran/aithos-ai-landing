
import React from 'react';
import PricingCard from '@/components/ui/PricingCard';
import BlurBlob from '@/components/ui/BlurBlob';

const starterFeatures = [
  { text: 'Free setup & customization', included: true },
  { text: '1 AI chatbot for your website', included: true },
  { text: 'Connects with your calender for easy appointment scheduling', included: true },
  { text: 'Captures leads & answers customer questions 24/7', included: true },
  { text: 'Monthly lead reports & performance analytics', included: true },
  { text: 'Monthly retraining & optimization of chatbot', included: true },
  { text: 'AI message credits: 2,000 / month', included: true },
  { text: 'Multi-channel integration (Facebook, Instagram, WhatsApp)', included: false },
  { text: 'Weekly retraining & optimization', included: false },
  { text: 'AI message credits: 4,000 / month', included: false },
];

const proFeatures = [
  { text: 'Free setup & customization', included: true },
  { text: '1 AI chatbot for your website', included: true },
  { text: 'Connects with your calender for easy appointment scheduling', included: true },
  { text: 'Captures leads & answers customer questions 24/7', included: true },
  { text: 'Monthly lead reports & performance analytics', included: true },
  { text: 'Monthly retraining & optimization of chatbot', included: true },
  { text: 'AI message credits: 2,000 / month', included: true },
  { text: 'Multi-channel integration (Facebook, Instagram, WhatsApp)', included: true },
  { text: 'Weekly retraining & optimization', included: true },
  { text: 'AI message credits: 4,000 / month', included: true },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        className="top-[30%] left-[45%] opacity-30"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Subscriptions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your needs, with everything you need to stay organized and productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <PricingCard
              title="Starter Chatbot"
              price="$199"
              period="month"
              features={starterFeatures}
              ctaText="14 days free trial"
            />
          </div>
          
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <PricingCard
              title="Pro Chatbot"
              price="$299"
              period="month"
              features={proFeatures}
              ctaText="14 days free trial"
              popular={true}
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution for your enterprise?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-4 text-aithos-accent hover:underline"
          >
            Contact us for custom pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
