import React from 'react';
import { useHover } from '../hooks/useHover.js';

const HoverDemo: React.FC = () => {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
};

export default HoverDemo;