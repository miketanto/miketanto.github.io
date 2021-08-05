import React from 'react'
import { useState, useEffect,useRef } from 'react';
import {motion,useCycle} from 'framer-motion';
import classes from './LeftSidebar.module.css'
import { NavToggle } from '../NavToggle/NavToggle';
import { useDimensions } from '../../hooks/useDimensions';
import { Navigation } from '../Navigation/Navigation';
function LeftSidebar() {
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 47.65vh)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 47.65vh)",
          transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <motion.nav
        className = {classes.navContainer}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className={classes.background} variants={sidebar} />
        <div className = {classes.navInnerContainer}>
          <div/>
          <Navigation toggle={() => toggleOpen()}/>
          <div/>
        </div>
        <NavToggle toggle={() => toggleOpen()} />
      </motion.nav>
    )
}

export default LeftSidebar
