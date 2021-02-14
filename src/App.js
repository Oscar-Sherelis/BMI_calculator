import React, {useState } from 'react';
import weights from './weight_result.png'
import './App.css';

function BMIForm() {
  const [height, setheight] = useState(1);
  const [weight, setWeight] = useState(1);
  const [result, setResult] = useState('');

  function calculateBMI (e) {
    e.preventDefault()
    let m = (height / 100)**2
    setResult(Math.floor(weight / m))
  }

  function LoadResult () {
    if (result) {
    return (
      <div className="result">
        <h2>Result: {result}</h2>
        <img src={weights} alt="" />
      </div>
    );
    } else {
      return (<div className="result"></div>)
    }
  }
  return (
    <main>
      <div className="bmi">
        <form action="">
          <h2>BMI calculator</h2>
          <label>
            Weight (kg)
            <input
              value={weight}
              type="Number"
              placeholder="Enter weight"
              onChange={(event) => setWeight(event.target.value)}
              required
              min="1"
            />
          </label>
          <label>
            Height (cm)
            <input
              value={height}
              type="number"
              placeholder="Enter height"
              onChange={(event) => setheight(event.target.value)}
              required
              min="1"
            ></input>
          </label>
          <button
            type="submit"
            onClick={(e) => {
              calculateBMI(e);
            }}
          >
            Submit
          </button>
        </form>
        <LoadResult></LoadResult>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BMIForm></BMIForm>
    </div>
  );
}

export default App;
