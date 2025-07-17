
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Users, 
  Calendar,
  Mail,
  Search,
  Zap
} from 'lucide-react';
import BlurBlob from '@/components/ui/BlurBlob';
import { useCart } from '@/contexts/CartContext';

const aiRoles = [
  {
    id: 'customer-support',
    title: 'AI Customer Support Agent',
    description: 'Handle customer inquiries 24/7 with intelligent responses and problem resolution.',
    icon: MessageSquare,
    features: ['Multi-language support', 'Instant responses', 'Ticket management'],
    availability: '24/7',
    responseTime: '< 30 seconds',
    price: 299
  },
  {
    id: 'content-writer',
    title: 'AI Content Writer',
    description: 'Create high-quality content for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['SEO optimized', 'Brand voice consistent', 'Plagiarism-free'],
    availability: '24/7',
    responseTime: '< 2 hours',
    price: 399
  },
  {
    id: 'data-analyst',
    title: 'AI Data Analyst',
    description: 'Analyze business data and generate actionable insights and reports.',
    icon: BarChart3,
    features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights'],
    availability: '24/7',
    responseTime: '< 1 hour',
    price: 499
  },
  {
    id: 'hr-assistant',
    title: 'AI HR Assistant',
    description: 'Streamline recruitment, onboarding, and employee management processes.',
    icon: Users,
    features: ['Resume screening', 'Interview scheduling', 'Employee onboarding'],
    availability: '24/7',
    responseTime: '< 15 minutes',
    price: 349
  },
  {
    id: 'scheduler',
    title: 'AI Scheduler',
    description: 'Manage appointments, meetings, and calendar optimization automatically.',
    icon: Calendar,
    features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling'],
    availability: '24/7',
    responseTime: '< 5 minutes',
    price: 249
  },
  {
    id: 'email-manager',
    title: 'AI Email Manager',
    description: 'Sort, respond to, and manage email communications efficiently.',
    icon: Mail,
    features: ['Priority sorting', 'Auto-responses', 'Spam filtering'],
    availability: '24/7',
    responseTime: '< 10 minutes',
    price: 199
  }
];

const Services: React.FC = () => {
  const { addToCart } = useCart();
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <BlurBlob 
        size="lg" 
        color="accent" 
        className="left-[5%] top-[10%] opacity-30"
      />
      <BlurBlob 
        size="xl" 
        className="right-[10%] bottom-[20%] opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Available AI Employee Roles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our specialized AI employees designed to handle specific business functions. 
            Each AI employee is trained for their role and ready to start immediately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={index}
                className="glass-card group hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {role.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium">{role.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Search className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{role.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      className="w-full bg-accent/10 hover:bg-accent/20 text-accent font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      onClick={() => {
                        addToCart({
                          id: role.id,
                          name: role.title,
                          price: role.price
                        });
                      }}
                    >
                      Hire This AI Employee - ${role.price}/month
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom AI Employee?</h3>
            <p className="text-muted-foreground mb-6">
              We can create specialized AI employees tailored to your specific business needs and workflows.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Request Custom AI Employee
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
