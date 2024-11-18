import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callOnce();
  }, [counter, data]);

  function callOnce() {
    console.log("just a normal function", counter);
  }

  return (
    <div>
      <h3>useEffect Hook</h3>
      <button onClick={() => setCounter(counter + 1)}>
        counter: {counter}
      </button>
      <button onClick={() => setData(data + 1)}>data: {data}</button>
    </div>
  );
};

export default UseEffect;
