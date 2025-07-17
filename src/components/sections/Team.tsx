import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BlurBlob from '@/components/ui/BlurBlob';
import { User, Linkedin, Twitter, Mail, Brain, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Dion Tran',
    position: 'CEO & AI Architect',
    bio: 'Leading the development of intelligent AI employees that transform how businesses operate.',
    expertise: ['AI Development', 'Business Strategy', 'Team Leadership'],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:contact@example.com'
    }
  },
  {
    name: 'Timmy Leung',
    position: 'CTO & AI Engineer',
    bio: 'Building the next generation of AI employees with cutting-edge machine learning and automation.',
    expertise: ['Machine Learning', 'System Architecture', 'AI Training'],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet Our AI Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The human experts behind your AI employees. We design, develop, and maintain the intelligent workforce that powers your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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
                    
                    <div className="space-y-3 mb-6">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-accent font-medium">{member.position}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

        {/* AI Development Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">AI Employee Types</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">Hours of AI Training</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="text-muted-foreground">AI Support</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Work with Our AI Team</h3>
            <p className="text-muted-foreground mb-6">
              Get direct access to our AI experts for custom AI employee development and optimization.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Schedule AI Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
