import React from 'react'
import classes from './Landing.module.css'
import DiagonalBG from '../../components/DiagonalBG/DiagonalBG'

function Landing() {
    return (
        <div className = {classes.mainContainer} id = 'landing'>
            <DiagonalBG/>
            <div className = {classes.midContainer}> 
                <div className ={classes.midWrapper}></div>
            </div>
      </div>
    )
}

export default Landing
