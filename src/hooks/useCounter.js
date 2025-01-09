import { useState } from "react";

export default function useCounter(initialValie = 0) {
  
  const [count, setCount] = useState(initialValie);

  const increment = ()=> setCount(count + 1);
  const decrement = ()=> setCount(count - 1);

  return { count, increment, decrement };

}