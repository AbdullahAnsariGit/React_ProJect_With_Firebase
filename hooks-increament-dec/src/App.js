
import "./App.css";
// import useState
import React, { useState } from "react";

// Value Assign ki
let count =1;

// main function
// useState always use in main fucntional component
function App() {
 //UseState react me cheez ki state ko change krne k liyn use hote hain, or yeh hook bhi kehlate
// Array destructuring in UseState
// count is current value
// setcount will be updated value
// useState(0) zero is also current value
const [count, setCount] = useState(0);

//Function for decrement
const decNum = () => {
setCount(count - 1)
};

//Function for increment
const incNum = () => {
    setCount(count + 1);
    };

// Return
  return (
    <div className="App">
{/* dynamic value */}
<box className="boxx">
      <h1 className="num">{count}</h1>

    {/* buttons */}
    <button className="btn" onClick={decNum}>decrement me</button>
      <button className="btn" onClick={incNum}>increament me</button>
      
</box>
     </div>
  );
}
export default App;
