import React, { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() =>{
    setCount(count+1);
  }, [count]);

  return (
    <div>
      <div>
        <h3>increment: {count}</h3>
        <button onClick={handleClick}>count</button>
      </div>

      <div>
        <ChildComponent  buttonName="click here" handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default App