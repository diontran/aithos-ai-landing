
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  industry: string;
  problem: string;
  solution: string;
  className?: string;
  isActive?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  industry,
  problem,
  solution,
  className,
  isActive = false
}) => {
  return (
    <Card 
      className={cn(
        "glass-card overflow-hidden h-full transition-all duration-300 group cursor-pointer hover-float",
        isActive && "border-aithos-blue/50",
        className
      )}
    >
      <CardHeader className="p-6 pb-0">
        <div className="w-32 max-w-full">
          <div className={cn(
            "h-1 bg-gradient-to-r from-aithos-blue to-aithos-accent mb-4",
            isActive ? "w-full" : "w-16 group-hover:w-full transition-all duration-500"
          )} />
          <h3 className="text-2xl font-bold">{industry}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Problem:</p>
          <p className="text-foreground">{problem}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">AI Solution:</p>
          <p className="text-foreground">{solution}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
