import React, { useState } from "react";

const InputField = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <h2>Get value from input</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="enter text here"
      />
      <h3>{value}</h3>
      <button onClick={()=>setValue("")}>clear</button>
    </div>
  );
};

export default InputField;
