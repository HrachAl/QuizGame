import { useState } from 'react'
import Game from './Components/Game'
import Result from './Components/Result'





let questions = [
  {
    id: 1,
    title: 'Ով է Բարսելոնայի պատմության լավագույն Ռմբարկուն?',
    variants: ['Լուիս Սուարես', 'Լիոնել Մեսսի', 'Սամուել Էտո', 'Նեյմար Ժունիոր'],
    correct: 1,
    
  },
  {
    id: 2,
    title: 'Քանի Չեմպիոնների լիգայի գավաթ ունի Բարսելոնան?',
    variants: ['4', '0', '5', '8'],
    correct: 2,
  },

  {

    id: 3,
    title: 'Ով է Բարսելոնայի Ներկայիս գլխավոր Մարզիչը?',
    variants: ['Չավի', 'Կուման', 'Էնրիկե', 'Գվարդիոլա'],
    correct: 0,
    
  },

  {
    id: 4,
    title: 'Քանի անգամ է Բարսելոնան իր պատմության ընթացքում հաղթել Թրեբլ',
    variants: ['0', '3', '1', '2'],
    correct: 3,
    
  },

  {
    id: 5,
    title: 'Որ Մրցաշրջանում է Բարսելոնան վերջին անգամ հաղթել Չեմպիոնների Լիգան',
    variants: ['2011/2012', '2014/2015', '2019/2020', '2013/2014'],
    correct: 1,
    
  },

]

function App() {
  const [random, setRandom] = useState(false)
  const [step, setStep] = useState(0)
  const [correct,setCorrect] = useState(0)
  let question = questions[step]
  const [start, setStart] = useState(false)
  
  const onClickVariant = (index) => {
    
    setStep(step+1)
    
    if(index === question.correct){
      setCorrect(correct+1)
      
    }
    
    
  }
  
  
  return (
    <>
        
       <h2>Բարև ձեզ սա Քուիզ է Բարսելոնայի երկրպագուների համար</h2>
       {
         step !== questions.length ?  <Game question={question} step={step} onClickVariant={onClickVariant}/> : 
         <Result  questions={questions} correct={correct}/>
       }
       
    </>
  )
}

export default App
