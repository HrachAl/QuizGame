import React from 'react'
import Progressbar from './Progressbar'
import { useState } from 'react'

const Game = ({question, onClickVariant,step}) => {

  const[progress,setProgress] = useState(0)

    function handleClick() {
        if(progress<100){
            setProgress((prev)=> prev +20)
        }
        console.log(progress);
    }

    function getColor () {
        if(progress<40){
            return "#ff0000";
        }else if (progress<70){
            return "#ffa500"
        }else {
            return "#2ecc71"
        }
    }

    
  return (
    <>
    <div className="game">
    <Progressbar progress={progress} color={getColor()}/>
    <h1>{question.title}</h1>
    <ul>
        {
            question.variants.map((variant, index) =>  (
            <li onClick={()=> {
              onClickVariant(index)
              handleClick()
              getColor()
            }} key={variant}>{variant}</li>
        )).sort((a,b) => 0.5 - Math.random())
        }
    </ul>
    </div>
    
    </>
  )
}

export default Game