'use client';
import React, { useEffect, useState } from 'react';

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number; 
  className?: string;
  itemProp?: string;
  'data-stat-type'?: string;
  'data-category'?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  from, 
  to, 
  duration = 2, 
  suffix = '', 
  decimals = 0,  
  className = '',
  itemProp,
  ...dataProps
}) => {
  const [displayValue, setDisplayValue] = useState(from.toFixed(decimals) + suffix);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate counter with pure JavaScript
      const startTime = Date.now();
      const startValue = from;
      const endValue = to;
      const animationDuration = duration * 1000;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        
        if (suffix === 'x') {
          // For multiplier, show 2 decimal places
          setDisplayValue((Math.round(currentValue * 100) / 100).toFixed(2) + suffix);
        } else if (decimals > 0) {
          // For values with specified decimals (like 12.30)
          setDisplayValue(currentValue.toFixed(decimals) + suffix);
        } else {
          // For whole numbers only
          setDisplayValue(Math.round(currentValue).toString() + suffix);
        }
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [from, to, duration, suffix, decimals]);  

  return (
    <span 
      className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      itemProp={itemProp}
      {...dataProps}
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'all 0.5s ease-out'
      }}
    >
      {displayValue}
    </span>
  );
};

export default CounterAnimation;
