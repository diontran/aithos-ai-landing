
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  children,
  className,
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl relative overflow-hidden h-full transition-all duration-300 hover:border-aithos-blue/50 hover-float",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-aithos-blue/20 flex items-center justify-center rounded-lg text-aithos-accent font-bold text-xl">
            {number}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
