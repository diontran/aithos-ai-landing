
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="bg-secondary/50 border-none focus-visible:ring-aithos-blue"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="bg-secondary/50 border-none focus-visible:ring-aithos-blue"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
            Phone (optional)
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="bg-secondary/50 border-none focus-visible:ring-aithos-blue"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            required
            rows={5}
            className="bg-secondary/50 border-none focus-visible:ring-aithos-blue resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-aithos-blue hover:bg-aithos-blue/90 text-primary-foreground button-bounce button-glow"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our <a href="#" className="text-aithos-accent hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
