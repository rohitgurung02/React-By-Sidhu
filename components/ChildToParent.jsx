import React from 'react'

const ChildToParent = ({ alert }) => {
    const data = {
        name: 'Ashish Chanchlani',
        address: 'Mumbai',
        age: 27

    }
    return (
        <>
            <button onClick={() => alert(data)}>click me</button>
        </>
    )
}

export default ChildToParent;

//HTML of App.jsx
// import { useState } from "react";
// import ChildToParent from "../components/ChildToParent";

// const App = () => {
//   function parentAlert(data) {
//     console.log(data)
//     // alert(data);
//   }
//   return (
//     <>
//       <h3>lifting state up</h3>
//       <ChildToParent alert={parentAlert} />
//     </>
//   );
// };

// export default App;
