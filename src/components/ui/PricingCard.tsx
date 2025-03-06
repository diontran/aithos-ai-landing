
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  popular = false,
  className,
}) => {
  return (
    <Card 
      className={cn(
        "glass-card overflow-hidden transition-all duration-300 relative hover-float",
        popular ? "border-red-500 z-10" : "hover:border-red-400/50",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 left-0 w-full bg-red-600 text-center py-1 text-xs font-medium">
          MOST POPULAR
        </div>
      )}
      <CardHeader className={cn("p-6", popular && "pt-8")}>
        <div className="mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="flex items-end mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className={cn(
                "w-5 h-5 mt-0.5",
                feature.included ? "text-accent" : "text-muted-foreground/50"
              )} />
              <span className={cn(
                "text-sm",
                feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"
              )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className={cn(
            "w-full button-bounce button-glow",
            popular 
              ? "bg-red-600 hover:bg-red-600/90 text-primary-foreground" 
              : "bg-secondary hover:bg-red-600/20"
          )}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
