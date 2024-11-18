import React, { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return <div style={{color: color, fontWeight: 'bold'}}>{time}</div>;
};

export default Clock;

//HTML of Clock Page:
{/* <div>
<select onChange={(event)=>setColor(event.target.value)}>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="orange">orange</option>
</select>
<Clock color={color} />
</div> */}
