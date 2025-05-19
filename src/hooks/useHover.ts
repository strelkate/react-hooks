import { useState, useRef, useCallback } from 'react';

interface UseHoverReturn {
  hovered: boolean;
  ref: (node: HTMLDivElement | null) => void;
}

export const useHover = (): UseHoverReturn => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const callbackRef = useCallback((node: HTMLDivElement | null) => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;
  }, [handleMouseEnter, handleMouseLeave]);

  return { hovered, ref: callbackRef };
};