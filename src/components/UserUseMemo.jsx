import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1)

  const multiCountMemo = useMemo(function multicount() {
    console.warn("multicount")
    return count * 5;

  }, [count]);

  return (
    <>
      <div className="app">
        <h3>{count}</h3>
        <h2>{item}</h2>
        <h4>{multiCountMemo}</h4>
        <button onClick={() => setCount(count + 1)}>update count: {count}</button>
        <button onClick={() => setItem(item*5)}>update item: {item}</button>
      </div>
    </>
  );
};

export default App;

//HTML of App.jsx
// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState(1)

//   const multiCountMemo = useMemo(function multicount() {
//     console.warn("multicount")
//     return count * 5;

//   }, [count]);

//   return (
//     <>
//       <div className="app">
//         <h3>{count}</h3>
//         <h2>{item}</h2>
//         <h4>{multiCountMemo}</h4>
//         <button onClick={() => setCount(count + 1)}>update count: {count}</button>
//         <button onClick={() => setItem(item*5)}>update item: {item}</button>
//       </div>
//     </>
//   );
// };

// export default App;
