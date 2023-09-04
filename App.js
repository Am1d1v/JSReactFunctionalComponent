import { useState,} from 'react';
import './App.css';
import Clicker from './Clicker';
import WithRef from './Ref';

function App() {

const [isClicker, setClicker] = useState(false);  

  return (
    <div className="App">
      <button className='Btn' onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker ? <Clicker /> : <h2>Activate toggle</h2>}
      <WithRef />
    </div>
  );
}

export default App;
