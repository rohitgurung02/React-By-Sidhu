import { useState } from "react";
import HandlePropsWithUseEffect from "../components/HandlePropsWithUseEffect";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <>
      <HandlePropsWithUseEffect count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>counter: {count}</button>
      <button onClick={()=>setData(data+1)}>counter: {data}</button>
    </>
  );
};

export default App;
