import { useState } from 'react';
import './App.css';



function App() {

  const [count, setValueCount] = useState(0);
  

  

  return (
    <div className="App">
      <button className='Btn' onClick={() => setValueCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
