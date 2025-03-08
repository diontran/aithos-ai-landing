
import React, { useState } from 'react';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import BlurBlob from '@/components/ui/BlurBlob';

const caseStudies = [
  {
    industry: 'Professional Coaching',
    problem: 'Coaches losing time answering repetitive questions about schedules and pricing.',
    solution: 'A 24/7 AI chatbot that answers inquiries, manages bookings, and supports coaching clients.',
  },
  {
    industry: 'E-Commerce',
    problem: 'Online stores experiencing high cart abandonment when customer questions go unanswered.',
    solution: 'An AI chatbot that recommends products and streamlines checkout for customers.',
  },
  {
    industry: 'Sales Teams',
    problem: 'Sales teams struggling with delayed follow-ups resulting in missed opportunities.',
    solution: 'An AI assistant that instantly qualifies leads, schedules demos, and answers questions.',
  },
  {
    industry: 'Real Estate',
    problem: 'Real estate agencies losing leads due to inquiries outside business hours.',
    solution: 'A property-specific chatbot that shares details, schedules viewings, and follows up with potential buyers 24/7.',
  },
  {
    industry: 'Healthcare',
    problem: 'Medical practices overwhelmed with repetitive patient inquiries and administrative tasks.',
    solution: 'A healthcare AI assistant that answers patient questions and manages bookings efficiently.',
  },
  {
    industry: 'Restaurants',
    problem: 'Restaurants losing time answering repetitive calls about menus and reservations.',
    solution: 'A restaurant-specific AI chatbot that manages menu inquiries and handles table bookings.',
  },
];

const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        className="left-[10%] bottom-[10%] opacity-40"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">AI Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI solutions have transformed businesses across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <CaseStudyCard
                industry={study.industry}
                problem={study.problem}
                solution={study.solution}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Ready to see how Aithos AI can transform your business?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-4 text-aithos-accent hover:underline"
          >
            Contact us for a personalized AI case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
