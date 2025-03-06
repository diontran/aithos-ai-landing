
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BlurBlob from '@/components/ui/BlurBlob';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dion Tran',
    position: 'CEO',
    bio: 'AI visionary with 10+ years of experience in machine learning and business automation.',
    image: '/lovable-uploads/70d6fe89-e567-415e-9977-1781aa6b38e3.png'
  },
  {
    name: 'Timmy Leung',
    position: 'CTO',
    bio: 'Machine learning specialist with a background in developing enterprise AI solutions.',
    image: null
  }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Card className="glass-card overflow-hidden h-full transition-all duration-300 hover:border-red-400/50 hover-float group">
                <CardContent className="p-0">
                  {member.image ? (
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-red-600/20 to-accent/10 aspect-square flex items-center justify-center">
                      <div className="rounded-full bg-red-600/30 p-6">
                        <User className="w-12 h-12 text-accent" />
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-sm text-accent mb-1">{member.position}</p>
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
