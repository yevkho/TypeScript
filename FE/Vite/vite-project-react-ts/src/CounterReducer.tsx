import { ReactNode, useReducer, ChangeEvent } from "react";
import { Section } from "./components/Section";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //   //   const [state, setCount] = useState<number>(1);
  //   const [state, dispatch] = useReducer(reducer, initState);

  //   //   const increment = () => setCount(prev => prev +1)
  //   const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  //   //   const decrement = () => setCount(prev => prev -1)
  //   const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  //   const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
  //     dispatch({
  //       type: REDUCER_ACTION_TYPE.NEW_INPUT,
  //       payload: e.target.value,
  //     });
  //   };

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  );
};
export default Counter;
