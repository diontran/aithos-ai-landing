
import React, { useState, useEffect } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import BlurBlob from '@/components/ui/BlurBlob';

const testimonials = [
  {
    quote: "Aithos AI solutions save us a ton of money on a monthly basis, highly recommend working with them",
    name: "Emma Watson",
    position: "CEO",
    company: "TechFlow Inc.",
  },
  {
    quote: "Aithos AI is a game-changer for any business looking to leverage AI effectively",
    name: "James Miller",
    position: "CTO",
    company: "Innovate Labs",
  },
  {
    quote: "Highly recommended Aithos AI's consultancy for any data-intensive business",
    name: "Sophia Chen",
    position: "Head of Operations",
    company: "DataDriven",
  },
  {
    quote: "Aithos AI has significantly enhanced our efficiency, resulting in the completion of more work every day",
    name: "Marcus Johnson",
    position: "Director",
    company: "Growth Solutions",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotation for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        color="accent"
        className="right-[10%] bottom-[10%] opacity-30"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#FEF7CD] scale-125' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
