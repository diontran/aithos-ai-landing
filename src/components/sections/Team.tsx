
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BlurBlob from '@/components/ui/BlurBlob';

const teamMembers = [
  {
    name: 'Alex Chen',
    position: 'CEO',
    bio: 'AI visionary with 10+ years of experience in machine learning and business automation.',
    image: 'public/lovable-uploads/e01ee9db-1ac7-4fd5-ab59-125d37bb59ed.png',
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    bio: 'Machine learning specialist with a background in developing enterprise AI solutions.',
    image: 'public/lovable-uploads/e01ee9db-1ac7-4fd5-ab59-125d37bb59ed.png',
  },
  {
    name: 'Michael Rodriguez',
    position: 'Head of AI Development',
    bio: 'Expert in natural language processing and conversational AI technologies.',
    image: 'public/lovable-uploads/e01ee9db-1ac7-4fd5-ab59-125d37bb59ed.png',
  },
  {
    name: 'Priya Patel',
    position: 'Client Success Manager',
    bio: 'Dedicated to ensuring clients achieve maximum ROI from their AI implementations.',
    image: 'public/lovable-uploads/e01ee9db-1ac7-4fd5-ab59-125d37bb59ed.png',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        color="accent" 
        className="right-[10%] top-[20%] opacity-40"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Meet our team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of AI experts is passionate about helping businesses harness the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Card className="glass-card overflow-hidden h-full transition-all duration-300 hover:border-aithos-blue/50 hover-float group">
                <CardContent className="p-0">
                  <div className="overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-aithos-accent mb-1">{member.position}</p>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
