import * as React from "react";
import { motion } from "framer-motion";
import classes from './NavToggle.module.css'
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const NavToggle = ({ toggle }) => (
  <motion.button 
    variants={{
      closed: { x:'0px',
      transition:{
        type:"spring",
        stiffness:150,
        mass: 1,
        damping:20,
        restDelta:0.01,
        restSpeed:0.01,
      } }, //Try make arrow here
      open: { x:'220px' ,
    transition:{
      type:"spring",
      stiffness:150,
      mass: 1,
      damping:20,
      restDelta:0.01,
      restSpeed:0.01,
    } }
    }}
    className = {classes.arrowBtn} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      {/* This is the burger path that changes to an x, 
      change it to right arrow to left arrow  */}
      <Path
        variants={{
          closed: { d: "M4.6 0 L21 11.5 "  }, //Try make arrow here
          open: { d: "M 18.4 0  L 4.6 11.5"  }
        }}
      />
      <Path
        variants={{
          closed: { d: "M4.6 23  L 21 11.5"},
          open: { d: "M 18.4 23  L 4.6 11.5" }
        }}
      />
    </svg>
  </motion.button>
);
