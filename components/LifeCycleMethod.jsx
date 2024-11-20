import React, { useEffect } from "react";

const LifeCycleMethod = ({ count, data }) => {
  // It works only at once
  useEffect(() => {
    console.log("Mounting Phase Only");
  }, []);

  // It works continuously
  useEffect(() => {
    console.log("Updated Phase Only");
  }, [count]);

  // It works in both states when we click the button
  useEffect(() => {
    return () => {
      console.log("unmounting phase only");
    };
  });
  return (
    <>
      <div className={{}}>getData 1: {count}</div>
      <div>getData 2: {data}</div>
    </>
  );
};

export default LifeCycleMethod;

//HTML of LifeCycleMethod:
// return (
//   <>
//     {display ? <LifeCycleMethod count={count} data={data} /> : null}

//     <button onClick={() => setCount(count + 1)}>counter: {count}</button>
//     <button onClick={() => setData(data + 1)}>counter: {data}</button>
//     <button onClick={() => setDisplay(!display)}>Toggle</button>
//   </>
// );
