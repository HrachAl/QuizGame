import { useState } from 'react'
import React from 'react'
import '../Components/Progressbar.style.scss'
const Progressbar = ({progress,color}) => {
    
  return (
    <>
        <div className="container">
            
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{width: `${progress}%`, backgroundColor: color}}>
                </div>
            </div>
        <div className="progress-label">{progress}%</div>
        </div>
    
    </>
  )
}

export default Progressbar