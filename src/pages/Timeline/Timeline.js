import React, { useEffect } from 'react'
import classes from './Timeline.module.css'
import BgAnimation from '../../animations/BackgroundAnimation/BackgroundAnimation';
function Timeline() {
    return (
        <div className = {classes.mainContainer} id = 'timeline'>
            <div className = {classes.mainTextContainer}>
              <span className = {classes.bigText}>Welcome to Mike</span><br/>
              <span className = {classes.bigText}>Portfolio</span><br/>
              </div>
        </div>

    )
}

export default Timeline
