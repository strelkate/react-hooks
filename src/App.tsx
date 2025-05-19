import React from 'react';
import FetchDemo from './components/FetchDemo';
import LocalStorageDemo from './components/LocalStorageDemo';
import HoverDemo from './components/HoverDemo';
import ViewportDemo from './components/ViewportDemo';
import ScrollDemo from './components/ScrollDemo';
import ToggleDemo from './components/ToggleDemo';
import './App.scss';


const App: React.FC = () => {
  return (
      <>
        <h1>Демо пользовательских хуков</h1>
        <ol>
          <li>
            <h2>Fetch</h2>
            <FetchDemo />
          </li>
          <li>
            <h2>LocalStorage</h2>
            <LocalStorageDemo />
          </li>
          <li>
            <h2>Hover</h2>
            <HoverDemo />
          </li>
          <li>
            <h2>Viewport</h2>
            <ViewportDemo />
          </li>
          <li>
            <h2>Scroll</h2>
            <ScrollDemo />
          </li>
          <li>
            <h2>Toggle</h2>
            <ToggleDemo />
          </li>
        </ol>
      </>
  );
};

export default App;