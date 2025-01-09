"use client";

import useCounter from "@/hooks/useCounter";
import useWindowWidth from "@/hooks/useWindowWidth";
import useOnlineStatus from "@/hooks/useOnlineStatus";

export default function Home() {
  
  const { count, increment, decrement } = useCounter(5);
  const width = useWindowWidth();
  const breakPoint = 768;
  const online = useOnlineStatus();

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>
    
      {
        width < breakPoint ? console.log('Mobile') : console.log('Desktop')
      }
      {
       <p>Du er: {online ? 'Online' : 'Offline'}</p>
      }
    
    </>
  ); 

};