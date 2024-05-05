import React from 'react'

const Result = ({correct, questions,randomize}) => {
  return (
    <>
    <div className="result">
       <span>Խաղն ավարտվեց դուք ճիշտ պատասխանեցիք {correct} հարցին {questions.length} ից</span>

       {
        correct<=2 ? <p style={{color: 'red'}}>վատ չէ բայց կարող էր ավելի լավ լինել</p> : <p style={{color: 'green'}}>Բավականին լավ արդյունք է Շարունակիր նույն տեմպով</p>
       }
       <a href="/">
       

      <button>Խաղալ նորից</button>
       </a>
    </div>
    </>
  )
}

export default Result