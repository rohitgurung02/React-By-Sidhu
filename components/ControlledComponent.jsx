import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h3>Controlled Component</h3>
   
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={password}
          placeholder="enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br /> <br />
        <button>submit</button>
        <button onClick={()=>{setName('');setPassword('');setEmail('')}}>clear</button>
        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>
   
    </div>
  );
};

export default ControlledComponent;
