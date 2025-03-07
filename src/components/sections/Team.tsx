import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BlurBlob from '@/components/ui/BlurBlob';
import { User, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Dion Tran',
    position: 'CEO',
    bio: 'AI visionary with 10+ years of experience in machine learning and business automation.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:contact@example.com'
    }
  },
  {
    name: 'Timmy Leung',
    position: 'CTO',
    bio: 'Machine learning specialist with a background in developing enterprise AI solutions.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:contact@example.com'
    }
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
      <BlurBlob 
        size="xl" 
        className="left-[5%] bottom-[10%] opacity-30"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of AI experts is passionate about helping businesses harness the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Card className="glass-card h-full transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mb-6 ring-4 ring-background">
                      <User className="w-12 h-12 text-accent" />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-accent font-medium">{member.position}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <Button variant="ghost" size="icon" className="rounded-full hover:text-accent hover:bg-accent/10" asChild>
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:text-accent hover:bg-accent/10" asChild>
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:text-accent hover:bg-accent/10" asChild>
                        <a href={member.socials.email}>
                          <Mail className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
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
