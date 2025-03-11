
import React, { useState } from 'react';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import BlurBlob from '@/components/ui/BlurBlob';

const caseStudies = [
  {
    industry: 'Melbourne Retail',
    problem: 'Retail chain losing customers due to long phone wait times and unanswered inquiries.',
    solution: 'Our advanced voice bot handles 85% of customer queries, reducing wait times from 15 minutes to instant responses.',
  },
  {
    industry: 'Professional Coaching',
    problem: 'Melbourne coaches losing time answering repetitive questions about schedules and pricing.',
    solution: 'Our AI chatbot answers inquiries 24/7, manages bookings, and supports coaching clients with 98% satisfaction.',
  },
  {
    industry: 'Melbourne E-Commerce',
    problem: 'Online stores experiencing high cart abandonment when customer questions go unanswered.',
    solution: 'Voice bot + chatbot solution that recommends products and streamlines checkout, reducing abandonment by 45%.',
  },
  {
    industry: 'Melbourne Sales Teams',
    problem: 'Sales teams struggling with delayed follow-ups resulting in missed opportunities.',
    solution: 'Voice bot assistant that instantly qualifies leads, schedules demos, and increases conversion rates by 37%.',
  },
  {
    industry: 'Real Estate',
    problem: 'Melbourne real estate agencies losing leads due to inquiries outside business hours.',
    solution: 'Property-specific voice bot that shares details, schedules viewings, and follows up with potential buyers 24/7.',
  },
  {
    industry: 'Healthcare',
    problem: 'Melbourne medical practices overwhelmed with repetitive patient inquiries and administrative tasks.',
    solution: 'Our healthcare voice bot that answers patient questions and manages bookings with 99.7% accuracy.',
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
          <h2 className="section-heading">Melbourne AI & Voice Bot Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our Melbourne AI agency's voice bot solutions have transformed local businesses with measurable results.
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
            Ready to see how Melbourne's leading AI agency can transform your business with voice bot technology?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-4 text-aithos-accent hover:underline"
          >
            Contact Melbourne's #1 AI agency for a personalized voice bot strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
