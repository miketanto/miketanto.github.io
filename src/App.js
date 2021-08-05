import { useState, useEffect,useRef } from 'react';
import classes from './App.module.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import DiagonalBG from './components/DiagonalBG/DiagonalBG';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CircleIndicator from './components/CircleIndicator/CircleIndicator';
import Timeline from './pages/Timeline/Timeline';

function App() {
  return (
    
    <div className={classes.App}>
      <CircleIndicator/>
       {/*<DiagonalBG  />*/}
      <LeftSidebar/>
      <Landing/>
      <Timeline/>
    </div>
  );
}

export default App;
