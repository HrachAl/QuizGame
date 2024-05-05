import React from 'react'

const Game = ({question, onClickVariant}) => {
  return (
    <>
    <div className="game">
    <h1>{question.title}</h1>
    <ul>
        {
            question.variants.map((variant, index) =>  (
            <li onClick={()=> onClickVariant(index)} key={variant}>{variant}</li>
        )).sort((a,b) => 0.5 - Math.random())
        }
    </ul>
    </div>
    
    </>
  )
}

export default Game