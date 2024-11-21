import React, { useState } from "react";

const RadioDropdown = () => {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("");
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>

      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        // value={"Male"}
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        name="gender"
        onChange={(event) => setGender(event.target.value)}
        value={"Female"}
        id="female"
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br />
      <br />

      <h2>Select City</h2>
      <select onChange={(event) => setCity(event.target.value)}>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
      </select>
      <h2>{city}</h2>
    </div>
  );
};

export default RadioDropdown;
