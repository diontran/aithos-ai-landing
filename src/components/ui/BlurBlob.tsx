
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurBlobProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'purple' | 'accent';
  delay?: number;
}

const sizes = {
  sm: 'w-48 h-48',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[32rem] h-[32rem]',
};

const colors = {
  purple: 'bg-purple-600/20',
  accent: 'bg-accent/20',
};

export const BlurBlob: React.FC<BlurBlobProps> = ({
  className,
  size = 'md',
  color = 'purple',
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        'blur-blob',
        sizes[size],
        colors[color],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default BlurBlob;
