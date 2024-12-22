import React, { useState } from 'react'

function useCounter() {
const [count,setCount]=useState<number>(0);
const decrement = ()=>{
    setCount(count -1)
};
const increment = ()=>{
    setCount(count +1)
}
  return{count, decrement, increment}
}

export default useCounter
