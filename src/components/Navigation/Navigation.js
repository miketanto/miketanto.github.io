import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem/MenuItem";
import classes from './MenuItem/MenuItem.module.css'
const variants = {
  open: {
    visibility:'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul className = {classes.listContainer} variants={variants}>
    {items.map((itemObj,index) => (
      <MenuItem item={itemObj} key={index} toggle = {toggle} />
    ))}
  </motion.ul>
);

const items = [{
    title:'Home',
    sectionId :'landing',
},{
    title:'About Me',
    sectionId :'about'
},{
    title:'Projects',
    sectionId :'projects'
},{
    title:'Contact Me',
    sectionId :'contact'
},];
