
import React, { useState } from 'react';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import BlurBlob from '@/components/ui/BlurBlob';

const caseStudies = [
  {
    industry: 'Online Coaches',
    problem: 'Repetitive questions about schedules and pricing eat into your coaching time.',
    solution: 'A 24/7 chatbot that answers inquiries, manages bookings, and even supports coaching.',
  },
  {
    industry: 'E-Commerce',
    problem: 'Cart abandonment spikes when product questions go unanswered.',
    solution: 'An AI chatbot that recommends products, and streamlines the checkout process.',
  },
  {
    industry: 'Sales',
    problem: 'Delayed follow-ups result in missed sales opportunities.',
    solution: 'An AI chatbot that instantly qualifies leads, schedules demos, and answers questions.',
  },
  {
    industry: 'Real Estate Agencies',
    problem: 'Lost leads due to inquiries outside business hours.',
    solution: 'A chatbot that shares property details, schedules viewings, and follows up with leads 24/7.',
  },
  {
    industry: 'Health Sector',
    problem: 'Repetitive patient inquiries and time-consuming administrative tasks.',
    solution: 'A chatbot that answers patient questions and manages bookings seamlessly.',
  },
  {
    industry: 'Restaurants',
    problem: 'Restaurants lose time answering repetitive calls about menus and reservations.',
    solution: 'A chatbot that manages menu inquiries, takes reservations, and handles table bookings.',
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
          <h2 className="section-heading">Case studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AI solutions have transformed businesses across different industries.
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
            Contact us for a personalized case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
