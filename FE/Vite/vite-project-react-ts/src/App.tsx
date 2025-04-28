import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";
//
import React, { useState, useEffect, useCallback } from "react";
//
interface User {
  id: number;
  username: string;
}

function App() {
  const [count2, setCount2] = useState<number | null>(0);
  const [users, setUsers] = useState<User[] | null>([]);
  //
  const [count, setCount] = useState<number>(1);
  //

  // not much to do in TS because useEffect deals with side-effects and does not return a value generally
  useEffect(() => {
    console.log("mounting");
    console.log("users: ", users);

    return () => console.log("unmounting");
  }, [users]);

  return (
    <>
      <Heading title={"Hello!"} />
      <Section title={"Different Title"}>This is my Section.</Section>
      {/* <Counter /> */}
      <Counter setCount={setCount}> Count is {count} </Counter>
      <List
        // items={["coffee", "tacos", "code"]}
        // render={(item) => <span className="gold">{item}</span>}
        items={["coffee", "tacos", "code"]}
        render={(item) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
