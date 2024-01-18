import { useState } from 'react'
import "./App.css";
import Counter from "./components/counter/counter";

function App() {
  const [count, setCount] = useState([1,4,3])

  return (
    <div className="App">
      <h1>{count.reduce((acc, val) => acc + val)}</h1>
      <div className="counterCountainer">
      {count.map((value, index) => {
        return (
          <Counter 
            label={`counter ${index}`}
            value={value} 
            increment={() => {
              const newCount = [...count]
              newCount[index] += 1
              setCount(newCount)
            }}

            decrement={() => {
              const newCount = [...count]
              newCount[index] -= 1
              setCount(newCount)
            }}
          />)
      })}
       </div>
    </div>
  );
}

export default App;
