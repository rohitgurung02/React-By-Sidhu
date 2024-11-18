import { useState } from "react";
import LifeCycleMethod from "../components/LifeCycleMethod";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState();

  return (
    <>
      {display ? <LifeCycleMethod count={count} data={data} /> : null}

      <button onClick={() => setCount(count + 1)}>counter: {count}</button>
      <button onClick={() => setData(data + 1)}>counter: {data}</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </>
  );
};

export default App;
