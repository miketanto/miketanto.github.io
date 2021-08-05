import React, { useEffect } from 'react'
import classes from './Timeline.module.css'
import BgAnimation from '../../animations/BackgroundAnimation/BackgroundAnimation';
function Timeline() {
    return (
        <div className = {classes.mainContainer} id = 'timeline'>
            <div
            style = {{height:'60vh', width: '50vw'}}>
            <BgAnimation/>
            </div>
      </div>
    )
}

export default Timeline
