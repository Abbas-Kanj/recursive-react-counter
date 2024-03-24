import React from 'react'
import "./style.css";

import { useState } from "react";

const RecursiveCounter = ({initial}) => {

    const [count, setCount] = useState(initial);
    const [counters, setCounters] = useState([]);
    
  return (
    <div className='counter-container'>
      <div className='counter'>
      <p>{initial}</p>

      <button onClick={() => {
        setCount(count+1)
        setCounters([...counters,count])
      }}>+</button>

      <button onClick={()=> {
        setCount(count-1)
      }}>-</button>

    </div>
    {
    counters.map((value, index)=> {
      return <RecursiveCounter initial={index}/>
    })}
    </div>
    
  );
}

export default RecursiveCounter