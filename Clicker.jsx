import { useState, useEffect } from 'react';


function Clicker(){

    const [count, setValueCount] = useState(0);
    
    const increment = () => {
      setValueCount(count + 1)
    }
    
    const decrement = () => {
      setValueCount(count - 1)
    }
  
    useEffect(() => {
        console.log('clicker')
    }, [count]);

    return (
      <div className="App">
        <button className='Btn' onClick={() => increment()}>Plus</button>
        <h3>{count}</h3>
        <button className='Btn' onClick={() => decrement()}>Minus</button>
      </div>
    );
  }
  
  export default Clicker;



















