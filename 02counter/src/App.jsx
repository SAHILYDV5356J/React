import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';

function App() {

  let [counter, setCounter] =useState(0);
  
 

  const addValue=()=>{
    counter++
   setCounter(counter)
  }

  
  const removecount=()=>{
     if(counter==0){
      return;
     }
    counter--;
    setCounter(counter);
  }

  return (
    <>
     
     <h1>Chai aur react</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button><br /><br />
     <button  onClick={removecount}>Remove Value {counter}</button>
     <p>footer: {counter}</p>
     
    </>
  )
}

export default App


// incase of no react babel inject automatically underthehood
