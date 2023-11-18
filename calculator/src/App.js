
import './App.css';
import { useState } from 'react';
function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => setResult(result.concat(e.target.name));
  const clear = () => setResult('');
  const backspace = () => setResult(result.slice);
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    }
    catch (error) {
      setResult("error");
    }
  };

  return (

    <div className="container">
      <h1 className='heading'>Calculator</h1>
      {/*Input field*/}
      <form>
        <input type={'text'} value={result} />
      </form>
      {/*Buttons*/}
      <div className="keypad">
        <div className='row'>
          <button className="clear" onClick={clear}>Clear</button>
          <button onClick={handleClick} name="7">7</button>
          <button onClick={handleClick} name="8">8</button>
          <button onClick={handleClick} name="9">9</button>
          <button onClick={handleClick} name="/">&divide;</button>
        </div>
        <div className='row'>
          <button className="backspace" onClick={backspace}>c</button>
          <button onClick={handleClick} name="4">4</button>
          <button onClick={handleClick} name="5">5</button>
          <button onClick={handleClick} name="6">6</button>
          <button onClick={handleClick} name="*">&times;</button>
        </div>
        <div className='row'>
          <button onClick={calculate} className="result">=</button>
          <button onClick={handleClick} name="1">1</button>
          <button onClick={handleClick} name="2">2</button>
          <button onClick={handleClick} name="3">3</button>
          <button onClick={handleClick} name="-">-</button>
        </div>
        <div className='row'>
          <button onClick={handleClick} name="0">0</button>
          <button onClick={handleClick} name="+">+</button>
          <button onClick={handleClick} name=".">.</button>

        </div>
      </div>
    </div>
  );
}

export default App;
