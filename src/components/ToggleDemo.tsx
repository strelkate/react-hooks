import React from 'react';
import { useToggle } from '../hooks/useToggle.js';

const ToggleDemo: React.FC = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <div>
      <button onClick={() => toggle()} style={{ backgroundColor: value }}>
        {value}
      </button>
      <button onClick={() => toggle('cyan')}>
        Set to cyan
      </button>
    </div>
  );
};

export default ToggleDemo; 