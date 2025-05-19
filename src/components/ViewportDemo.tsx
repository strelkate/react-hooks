import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize.js';

const ViewportDemo: React.FC = () => {
  const { height, width } = useViewportSize();

  return (
    <div>
      Width: <strong>{width}</strong>, height: <strong>{height}</strong>
    </div>
  );
};

export default ViewportDemo; 