import {
  createContext,
  useReducer,
  ChangeEvent,
  ReactElement,
  useCallback,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

const useCounterContext = (initState: StateType) => {
  //   const [state, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initState);

  // const increment = () => setCount(prev => prev +1)
  // useCallback for functions that will not be changing so no need to re-render
  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  //   const decrement = () => setCount(prev => prev -1)
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  //

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};
