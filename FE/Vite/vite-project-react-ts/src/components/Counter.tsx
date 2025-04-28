import {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from "react";

// import React, { useState } from "react";
type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

//
type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function Counter({ setCount, children }: CounterProps) {
  //
  // const [count, setCount] = useState<number>(1);
  //
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  //
  // to Memoize the function useCallback (no need to provide types here, ok to be inferred void/any)
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );

  // to Memoise a value useMemo (for an expensive calculation in case it would hold up everything) (no need for TS here again, 'number' can be inferred)
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      {/* <h1>Count is {count}</h1> */}
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <button onClick={addTwo}> +2 </button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default Counter;
