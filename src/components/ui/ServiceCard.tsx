
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  children,
  className,
}) => {
  return (
    <Card className={cn(
      "glass-card overflow-hidden group h-full transition-all duration-300 hover:border-[#FEF7CD]/50 hover-float",
      className
    )}>
      <CardHeader className="p-6 pb-0">
        <div className="w-12 h-12 rounded-lg bg-[#FEF7CD]/20 flex items-center justify-center mb-4 text-accent group-hover:bg-[#FEF7CD]/30 transition-colors">
          {icon}
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
