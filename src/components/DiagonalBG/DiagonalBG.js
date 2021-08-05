import{ React,useRef, useState,useEffect }from 'react'
import {animate, motion, useElementScroll, useTransform} from 'framer-motion'
import classes from './DiagonalBG.module.css'
function DiagonalBG() {
    const text = " M S M S M S M S M S M S M S M S M S M S "
   
    const updateOffset = (offset,idx)=>{
        let diagonal = document.querySelector(`#d${idx}`);
        diagonal.setAttribute('startOffset', offset)  ; // adjust the y axis
    }

    const updateAllOffset = (currentScroll) =>{
        for(let i = 1;i<=7;i++){

            if(i%2===0){
             updateOffset(currentScroll*0.195,i*2);
            }else updateOffset(-1*currentScroll*0.195,i*2);
        }
    }
    const animateIn = (idx,top)=>{
        let start = Date.now();
        let diagonal = document.querySelector(`#d${idx}`)
        let id = requestAnimationFrame(function animate(time) {
            let interval = (Date.now() - start) / 2000;
            if (interval > 1) interval = 1;
            if(top){
                diagonal.setAttribute('startOffset',(1-interval) * 200)  ; // adjust the y axis
            }else{
                diagonal.setAttribute('startOffset',(1-interval) * -200)  ; // adjust the y axis
            }
            

            if (interval < 1) {
                requestAnimationFrame(animate);
            }

        })
    }
    const animateDiagonals = ()=>{
        for(let i = 1;i<=7;i++){
            if(i%2===0){
             animateIn(i*2,true);
            }else animateIn(i*2,false);
        }
    }
    const onScroll = ()=>{
        requestAnimationFrame(()=>{
            updateAllOffset(window.scrollY);
        })
    }
    useEffect(()=>{
       animateDiagonals();
       window.addEventListener('scroll', onScroll)
       return () => {  window.removeEventListener('scroll', onScroll) }
    },[])
    return (
        <motion.svg
        version="1.1"
        id={`diagonalBG`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100 ">
        <path style={{fill: 'none' }} id={`diag2`} d= {`M0 20 L20 0`}/>
        <path style={{fill: 'none' }} id={`diag4`} d= {`M0 40 L40 0`}/>
        <path style={{fill: 'none' }} id={`diag6`} d= {`M0 60 L60 0`}/>
        <path style={{fill: 'none' }} id={`diag8`} d= {`M0 80 L80 0`}/>
        <path style={{fill: 'none' }} id={`diag10`} d= {`M0 100 L100 0`}/>
        <path style={{fill: 'none' }} id={`diag12`} d= {`M20 100 L100 20`}/>
        <path style={{fill: 'none' }} id={`diag14`} d= {`M40 100 L100 40`}/>
        <path style={{fill: 'none' }} id={`diag16`} d= {`M60 100 L100 60`}/>


       
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d2" xlinkHref={`#diag2`}> {text} </motion.textPath></text>
      
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d4" xlinkHref={`#diag4`}> {text} </motion.textPath></text>
        
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d6" xlinkHref={`#diag6`}> {text} </motion.textPath></text>
   
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d8" xlinkHref={`#diag8`}> {text} </motion.textPath></text>
    
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d10" xlinkHref={`#diag10`}> {text} </motion.textPath></text>
 
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d12" xlinkHref={`#diag12`}> {text} </motion.textPath></text>
       
        <text style={{fontSize: 5,letterSpacing: 1,fontWeight: 'bold',fill:'rgba(252, 248, 11,100%)'}}><motion.textPath  id = "d14" xlinkHref={`#diag14`}> {text} </motion.textPath></text>
   
      </motion.svg>
    )
}

export default DiagonalBG
