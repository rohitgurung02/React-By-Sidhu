import React, { useEffect } from "react";

const HandlePropsWithUseEffect = ({ count, data }) => {
    
  const handleCounter = () => {
    console.log("handle counter");
  };

  useEffect(() => {
    handleCounter();
  }, []);

  return (
    <>
      <div>getData 1: {count}</div>
      <div>getData 2: {data}</div>
    </>
  );
};

export default HandlePropsWithUseEffect;

//HTML of Handle Props With UseEffect()
{/* <>
<HandlePropsWithUseEffect count={count} data={data}/>
<button onClick={()=>setCount(count+1)}>counter: {count}</button>
<button onClick={()=>setData(data+1)}>counter: {data}</button>
</> */}
