import { useState } from 'react';
import './App.css';
import Clicker from './Clicker';


function App() {

const [isClicker, setClicker] = useState(false);  

  return (
    <div className="App">
      <button className='Btn' onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker ? <Clicker /> : <h2>Activate toggle</h2>}
    </div>
  );
}

export default App;
