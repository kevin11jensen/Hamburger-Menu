import React from 'react';
import { Power2, TimelineLite } from 'gsap';
import './App.css';

function App() {

  var tl = new TimelineLite({paused: true, reversed: true});

  tl
    .to('.upper', 0.5, {attr: {d: 'M8,2 L2,8'}, x: 1, ease:Power2.easeInOut}, 'start')
    .to('.middle', 0.5, {autoAlpha: 0}, 'start')
    .to('.lower', 0.5, {attr: {d: 'M8,8 L2,2'}, x: 1, ease:Power2.easeInOut}, 'start');
    
    // document.querySelector('.hamburger').addEventListener('click', function(){
    //   tl.reversed() ? tl.play() : tl.reverse();
    // })
    function handleClick() {
      console.log('clicked me');
    }

  return (
    <div className = 'App'>
      <svg 
      viewBox = '0 0 12 10' 
      className = 'hamburger' 
      height = '100px' 
      width = '120px'
      onClick = {handleClick}
      >
      
        <path 
        d = 'M10,2 L2,2' 
        className = 'upper' 
        style = {{
          fill: 'none', 
          stroke: '#474747', strokeLinecap: 'round'}}
        />
        <path 
        d = 'M2,5 L10,5' 
        className = 'middle' 
        style = {{
          fill: 'none', 
          stroke: '#474747', strokeLinecap: 'round'}}
        />
        <path 
        d = 'M10,8 L2,8' 
        className = 'lower' 
        style = {{
          fill: 'none', 
          stroke: '#474747', strokeLinecap: 'round'}}
        />   
    </svg>
    </div>
  );
}

export default App;

// document.querySelector('.hamburger').addEventListener('click', function(){
//   tl.reversed() ? tl.play() : tl.reverse();
// })