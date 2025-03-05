
import React from 'react';
import ProcessStep from '@/components/ui/ProcessStep';
import BlurBlob from '@/components/ui/BlurBlob';

const steps = [
  {
    number: '01',
    title: 'Analyze',
    description: 'We start with a thorough analysis of your current workflows to see how AI could improve your processes.',
    delay: 0.1,
  },
  {
    number: '02',
    title: 'Build & Implement',
    description: 'Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety.',
    delay: 0.2,
  },
  {
    number: '03',
    title: 'Maintain & Improve',
    description: 'After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.',
    delay: 0.3,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        color="accent"
        className="right-[5%] top-[20%]"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">The process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful implementation of AI solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${step.delay}s` }}
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
