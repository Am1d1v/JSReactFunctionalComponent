import { useState } from 'react';
import './App.css';



function App() {

  const [count, setValueCount] = useState(0);
  
  const increment = () => {
    setValueCount(count + 1)
  }
  
  const decrement = () => {
    setValueCount(count - 1)
  }

  return (
    <div className="App">
      <button className='Btn' onClick={() => increment()}>Plus</button>
      <h3>{count}</h3>
      <button className='Btn' onClick={() => decrement()}>Minus</button>
    </div>
  );
}

export default App;
