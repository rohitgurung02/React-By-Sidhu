import React, { useState } from "react";

const CheckBox = () => {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    // setSkills(event.target.value);
    if(event.target.checked){
        setSkills([...skills, event.target.value])
    }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  };
  return (
    <div>
      <h3>Select your skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JavaScript</label>
      <br />
      <input onChange={handleSkills}type="checkbox" id="node" value="node" />
      <label htmlFor="node">Node</label>
      <br />
      <input onChange={handleSkills}type="checkbox" id="java" value="java" />
      <label htmlFor="java">Java</label>
      <h2>{skills}</h2>
    </div>
  );
};

export default CheckBox;
