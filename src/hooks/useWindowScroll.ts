import { useState, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface ScrollPosition {
  x: number;
  y: number;
}

type ScrollToOptions = Partial<ScrollPosition>;

export function useWindowScroll(): [ScrollPosition, (options: ScrollToOptions) => void] {
  const [scroll, setScroll] = useState<ScrollPosition>(() => ({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
  }));

  const handleScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  const scrollTo = useCallback(({ x, y }: ScrollToOptions) => {
    window.scrollTo({
      left: x,
      top: y,
      behavior: 'smooth',
    });
  }, []);

  useWindowEvent('scroll', handleScroll);

  return [scroll, scrollTo];
} 