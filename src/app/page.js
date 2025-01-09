"use client";

import useCounter from "@/hooks/useCounter";

export default function Home() {
  
  const { count, increment, decrement } = useCounter(5);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>

    </>
  );
};