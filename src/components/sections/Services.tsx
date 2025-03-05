
import React from 'react';
import { MessageSquare, FileText, Workflow, LineChart } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import BlurBlob from '@/components/ui/BlurBlob';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'AI Chatbot/Voicebot Development',
    description: 'Easy to use AI chatbots that are trained on your business who can answer ALL your clients questions, recommend products & services, book appointments, capture leads.',
    icon: <MessageSquare className="w-6 h-6" />,
    delay: 0.1,
  },
  {
    title: 'Saas Programs AI Production',
    description: "Produce and deploy simple and ready to use custom Saas that your business can use to optimise any part of your work, be that a program that helps review documents amd much more.",
    icon: <FileText className="w-6 h-6" />,
    delay: 0.2,
  },
  {
    title: 'AI Workflow Automation',
    description: 'We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.',
    icon: <Workflow className="w-6 h-6" />,
    delay: 0.3,
  },
  {
    title: 'AI Consulting',
    description: 'We provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.',
    icon: <LineChart className="w-6 h-6" />,
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
          <h2 className="section-heading">What we do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered services transform how businesses operate, automate tasks, and engage with customers.
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
              <h3 className="text-2xl font-semibold mb-2">Automations Available</h3>
              <p className="text-muted-foreground">
                We offer over 100 pre-built automations that can be customized and implemented for your business needs. Our solutions connect with all major platforms and tools.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Gmail', 'Slack', 'Notion', 'Zapier', 'Trello', 'GitHub', 'Airtable', 'Google Workspace'].map((tool, i) => (
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
