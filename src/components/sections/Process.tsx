
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Settings, 
  Zap, 
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';

const steps = [
  {
    step: '01',
    title: 'Choose Your AI Employee',
    description: 'Select from our pre-trained AI employees or request a custom role tailored to your specific needs.',
    icon: Users,
    duration: '< 5 minutes',
    features: ['Browse available roles', 'Review capabilities', 'Custom requirements']
  },
  {
    step: '02',
    title: 'Configure & Train',
    description: 'We configure your AI employee with your business knowledge, processes, and brand voice.',
    icon: Settings,
    duration: '1-2 hours',
    features: ['Business knowledge upload', 'Process training', 'Brand voice setup']
  },
  {
    step: '03',
    title: 'Deploy & Monitor',
    description: 'Your AI employee goes live and starts working immediately. Monitor performance and optimize.',
    icon: Zap,
    duration: 'Instant',
    features: ['24/7 availability', 'Real-time monitoring', 'Performance analytics']
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        className="left-[10%] top-[20%] opacity-30"
      />
      <BlurBlob 
        size="xl" 
        color="accent" 
        className="right-[5%] bottom-[10%] opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How to Hire Your AI Employee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting your AI employee up and running is simple and fast. 
            From selection to deployment, the entire process takes less than 2 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="glass-card relative group hover:border-accent/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="p-2 rounded-lg bg-accent/10">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Instant Deployment</h3>
            <p className="text-muted-foreground text-sm">Your AI employee starts working immediately after setup</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">24/7 Availability</h3>
            <p className="text-muted-foreground text-sm">No breaks, no holidays, no sick days</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Scalable Team</h3>
            <p className="text-muted-foreground text-sm">Hire as many AI employees as you need</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2">Cost Effective</h3>
            <p className="text-muted-foreground text-sm">Fraction of the cost of human employees</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Hire Your First AI Employee?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of businesses that have already hired AI employees and transformed their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Start Hiring Now
              </button>
              <button className="border border-accent/30 hover:bg-accent/10 text-accent font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
