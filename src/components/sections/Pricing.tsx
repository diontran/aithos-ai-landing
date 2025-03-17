
import React, { useState } from 'react';
import PricingCard from '@/components/ui/PricingCard';
import BlurBlob from '@/components/ui/BlurBlob';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

// Chatbot pricing features
const starterChatbotFeatures = [
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

const proChatbotFeatures = [
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

// Voice bot pricing features
const starterVoiceBotFeatures = [
  { text: 'Free setup & customization', included: true },
  { text: '1 AI voice bot for your website', included: true },
  { text: 'Connects with your calender for easy appointment scheduling', included: true },
  { text: 'Captures leads & answers customer questions 24/7', included: true },
  { text: 'Monthly lead reports & performance analytics', included: true },
  { text: 'Monthly retraining & optimization of voice bot', included: true },
  { text: 'AI voice minutes: 500 / month', included: true },
  { text: 'Multi-channel integration capabilities', included: false },
  { text: 'Weekly retraining & optimization', included: false },
  { text: 'AI voice minutes: 1,000 / month', included: false },
];

const proVoiceBotFeatures = [
  { text: 'Free setup & customization', included: true },
  { text: '1 AI voice bot for your website', included: true },
  { text: 'Connects with your calender for easy appointment scheduling', included: true },
  { text: 'Captures leads & answers customer questions 24/7', included: true },
  { text: 'Monthly lead reports & performance analytics', included: true },
  { text: 'Monthly retraining & optimization of voice bot', included: true },
  { text: 'AI voice minutes: 500 / month', included: true },
  { text: 'Multi-channel integration capabilities', included: true },
  { text: 'Weekly retraining & optimization', included: true },
  { text: 'AI voice minutes: 1,000 / month', included: true },
];

const Pricing: React.FC = () => {
  const [isVoiceBot, setIsVoiceBot] = useState(false);
  
  const starterPrice = isVoiceBot ? "$399" : "$299";
  const proPrice = isVoiceBot ? "$499" : "$399";
  const starterFeatures = isVoiceBot ? starterVoiceBotFeatures : starterChatbotFeatures;
  const proFeatures = isVoiceBot ? proVoiceBotFeatures : proChatbotFeatures;
  const productType = isVoiceBot ? "Voice Bot" : "Chatbot";

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        className="top-[30%] left-[45%] opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Subscriptions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business requirements with all essential features to enhance customer engagement.
          </p>
          
          <div className="flex items-center justify-center mt-10 gap-4">
            <span className={`text-sm font-medium transition-colors ${!isVoiceBot ? 'text-foreground' : 'text-muted-foreground/70'}`}>Chatbot</span>
            <Switch 
              checked={isVoiceBot} 
              onCheckedChange={setIsVoiceBot}
              className="data-[state=checked]:bg-[#FEF7CD]/80 data-[state=checked]:text-black"
            />
            <span className={`text-sm font-medium transition-colors ${isVoiceBot ? 'text-foreground' : 'text-muted-foreground/70'}`}>Voice Bot</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <PricingCard
              title={`Starter ${productType}`}
              price={starterPrice}
              period="month"
              features={starterFeatures}
              ctaText="Start 14-day trial"
            />
          </div>
          
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <PricingCard
              title={`Pro ${productType}`}
              price={proPrice}
              period="month"
              features={proFeatures}
              ctaText="Start 14-day trial"
              popular={true}
            />
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            Need a tailored enterprise solution?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-3 text-aithos-accent hover:underline font-medium"
          >
            Contact us for custom pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
