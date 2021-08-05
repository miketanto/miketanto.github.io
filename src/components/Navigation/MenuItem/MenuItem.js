import  React, {useState} from "react";
import { motion } from "framer-motion";
import classes from './MenuItem.module.css'
import {StackSVG,HomeSVG, MailSVG, InfoSVG} from "../../../icons/IconSVG";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    visibility:'visible',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: -50,
    opacity: 0,
    transitionEnd: {
        visibility:'hidden'
      },
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item,toggle }) => {
  //const style = { border: `2px solid ${colors[i]}` };
  const [isHover, setIsHover] = useState(false);
  const icon = () => {
    switch(item.title) {
  
      case "Home":   return <HomeSVG isHover = {isHover}/>;
      case "About Me":   return <InfoSVG isHover = {isHover}/>;
      case "Projects": return <StackSVG isHover = {isHover}/>;
      case "Contact Me":  return <MailSVG  isHover = {isHover}/>;
  
      default:      return <StackSVG isHover = {isHover}/>
    }
  }
  
  return (
    <motion.li
      className = {classes.listChild}
      variants={variants}
      onMouseEnter ={()=>setIsHover(true)}
      onMouseLeave ={()=>setIsHover(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon()}
      <a className={classes.textArea} onClick = {()=>toggle()} href = {`#${item.sectionId}`}>{item.title}</a>
    </motion.li>
  );
};
