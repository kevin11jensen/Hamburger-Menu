import React, { useEffect, useRef } from 'react';
import { Power2, TimelineLite, TweenMax } from 'gsap';
import styled from 'styled-components';
import './App.css';

function App() {

  const tl = new TimelineLite({paused: true, reversed: true});
  let app = useRef(null);
  let hamburger = useRef(null);
  let upper = useRef(null);
  let middle = useRef(null);
  let lower = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    TweenMax.to(hamburger, 0, {css: {visibility: 'visible'}})
    tl
    .to(upper, 0.5, {attr: {d: 'M8,2 L2,8'}, x: 1, ease:Power2.easeInOut}, 'start')
    .to(middle, 0.5, {autoAlpha: 0}, 'start')
    .to(lower, 0.5, {attr: {d: 'M8,8 L2,2'}, x: 1, ease:Power2.easeInOut}, 'start');
    
  }, [])

    function handleClick() {
      tl.reversed() ? tl.play() : tl.reverse();
    }

  return (
    <div className = 'App' ref = {el => app = el}>
      <svg 
      viewBox = '0 0 12 10' 
      className = 'hamburger'
      ref = {el => hamburger = el} 
      height = '100px' 
      width = '120px'
      onClick = {handleClick}
      >
      
        <path 
        d = 'M10,2 L2,2' 
        className = 'upper' 
        ref = {el => upper = el}
        style = {{
          fill: 'none', 
          stroke: '#474747', strokeLinecap: 'round'}}
        />
        <path 
        d = 'M2,5 L10,5' 
        className = 'middle' 
        ref = {el => middle = el}
        style = {{
          fill: 'none', 
          stroke: '#474747', strokeLinecap: 'round'}}
        />
        <path 
        d = 'M10,8 L2,8' 
        className = 'lower' 
        ref = {el => lower = el}
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