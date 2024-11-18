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
