import React from 'react';
import { useWindowScroll } from '../hooks/useWindowScroll.js';

const ScrollDemo: React.FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: <strong>{scroll.x}</strong>, y: <strong>{scroll.y}</strong>
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
};

export default ScrollDemo; 