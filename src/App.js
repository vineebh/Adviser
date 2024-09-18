import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [adv , setAdvice] = useState("Null");
  const [day, setDay] = useState(-1);

  async function getAdvice(){
    const res= await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setDay((c)=>c+1);
  }

  useEffect(function(){
    getAdvice();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Advice for today is </h3>
        
        <h1>{adv}</h1>

        <button className='btn' onClick={getAdvice}>Another one</button>
        <Message day={day}/>
      </header>
    </div>
  );
}

function Message(props){
  return (
    <h3>Advice Count {props.day}</h3>
  )
}

export default App;
