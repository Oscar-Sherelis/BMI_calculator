import logo from './logo.svg';
import React, {useState, useEffect } from 'react';
import './App.css';

function BMIForm() {
  const [height, setheight] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <main>
      <form action="">
        <h2>BMI calculator</h2>
        <label>Weight
          <input type="Number" placeholder="Enter weight" />
        </label>
        <label>Height (cm)
        <input type="number" placeholder="Enter height"></input>
        </label>
      </form>
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
