import React from 'react';
import { cn } from '@/lib/utils';

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Grid cell size in pixels
   */
  gridSize?: number;
  /**
   * Grid line color
   */
  gridColor?: string;
  /**
   * Grid line opacity (0-100)
   */
  gridOpacity?: number;
  /**
   * Whether to fill the parent container
   */
  fullSize?: boolean;
}

const GridBackground = ({
  gridSize = 20,
  gridColor = '#94a3b8',
  gridOpacity = 15,
  fullSize = true,
  className,
  ...props
}: GridBackgroundProps) => {
  // Ensure valid values for opacity (0-100)
  const safeOpacity = Math.max(0, Math.min(100, gridOpacity));
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        fullSize && 'absolute inset-0 h-full w-full -z-10',
        className
      )}
      {...props}
    >
      <div 
        className="h-full w-full -z-10 "
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `linear-gradient(to right, ${gridColor}${Math.round(safeOpacity * 2.55).toString(16).padStart(2, '0')} 1px, transparent 1px), 
                            linear-gradient(to bottom, ${gridColor}${Math.round(safeOpacity * 2.55).toString(16).padStart(2, '0')} 1px, transparent 1px)`,
        }}
      />
    </div>
  );
};


// Usage example:
// <GridBackground gridSize={20} gridColor="#94a3b8" gridOpacity={15} fullSize={true} />


export default GridBackground;
