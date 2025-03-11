
import React from 'react';
import { MessageSquare, FileText, Workflow, LineChart, Megaphone } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import BlurBlob from '@/components/ui/BlurBlob';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Voice Bot Development',
    description: 'Melbourne\'s leading voice bot specialists creating natural-sounding voice assistants for customer service, sales, and support automation.',
    icon: <Megaphone className="w-6 h-6" />,
    delay: 0.1,
  },
  {
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbots built by Melbourne\'s top AI agency to answer queries, recommend products, book appointments, and capture leads 24/7.',
    icon: <MessageSquare className="w-6 h-6" />,
    delay: 0.2,
  },
  {
    title: 'Custom SaaS AI Solutions',
    description: "Tailored software solutions from Melbourne's premier AI agency that leverage cutting-edge AI to review documents and streamline operations.",
    icon: <FileText className="w-6 h-6" />,
    delay: 0.3,
  },
  {
    title: 'AI Workflow Automation',
    description: 'Melbourne\'s expert AI agency eliminating repetitive tasks with automation services that save time and enhance efficiency.',
    icon: <Workflow className="w-6 h-6" />,
    delay: 0.4,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        className="left-[5%] top-[30%]"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Melbourne's Top AI Agency Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our award-winning AI-powered services including voice bots and automation transform how Melbourne businesses operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-8 sm:p-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl sm:text-7xl font-bold text-center md:text-left gradient-text lg:text-8xl">
              100<span className="text-aithos-accent">+</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Melbourne's Premier Voice Bot & AI Solutions</h3>
              <p className="text-muted-foreground">
                As Melbourne's leading AI agency, we offer over 100 expertly crafted AI automations including voice bots that can be customized for your specific business needs.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Voice Bots', 'AI Chatbots', 'Slack', 'Notion', 'Zapier', 'Trello', 'Melbourne Businesses', 'Google Workspace'].map((tool, i) => (
                  <span 
                    key={i} 
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs",
                      i % 2 === 0 ? "bg-aithos-blue/20 text-aithos-blue-light" : "bg-secondary text-foreground/80"
                    )}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
