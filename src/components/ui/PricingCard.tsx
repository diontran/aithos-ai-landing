
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
        "glass-card overflow-hidden transition-all duration-300 relative hover-float backdrop-blur-sm",
        popular ? "border-[#FEF7CD]/50 z-10 shadow-[0_8px_30px_rgb(254,247,205,0.1)]" : "hover:border-[#FEF7CD]/30",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 left-0 w-full bg-[#FEF7CD]/90 text-center py-1.5 text-xs font-medium tracking-wide text-black">
          RECOMMENDED
        </div>
      )}
      <CardHeader className={cn("p-8", popular && "pt-10")}>
        <div className="mb-5">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="flex items-end mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1.5">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={cn(
                "w-5 h-5 mt-0.5",
                feature.included ? "text-accent" : "text-muted-foreground/30"
              )} />
              <span className={cn(
                "text-sm",
                feature.included ? "text-foreground" : "text-muted-foreground/30 line-through"
              )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-8 pt-2">
        <Button 
          className={cn(
            "w-full transition-all duration-300",
            popular 
              ? "bg-[#FEF7CD]/90 hover:bg-[#FEF7CD] text-black" 
              : "bg-secondary hover:bg-[#FEF7CD]/20"
          )}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
