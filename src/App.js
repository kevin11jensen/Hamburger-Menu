import React from 'react';

import './App.css';

function App() {
  return (
    <div className = 'App'>
      <svg viewBox = '0 0 12 10' className = 'hamburger' height = '100px' width = '120px'>
        <path d = 'M10,2 L2,2' className = 'upper' style = {{fill: 'none', stroke: '#474747', strokeLinecap: 'round'}}/>
        <path d = 'M2,5 L10,5' className = 'middle' style = {{fill: 'none', stroke: '#474747', strokeLinecap: 'round'}}/>
        <path d = 'M10,8 L2,8' className = 'lower' style = {{fill: 'none', stroke: '#474747', strokeLinecap: 'round'}}/>   
    </svg>
    </div>
  );
}

export default App;
