<<<<<<< HEAD
import { useState } from 'react';

=======
import {useState} from 'react'
>>>>>>> feature/react-unit-testing
import { CounterButton } from './components/counter-button/counter-button';
import { ValueViewer } from './components/value-viewer/value-viewer';
import './App.css';

<<<<<<< HEAD
function App() {
  const [ counterValue, setCounterValue ] = useState(0);

  function modifyValue(modifier) {
    setCounterValue(counterValue + modifier);
  }

  return (
    <div className="App">
      <CounterButton type={'decrement'} onChangeValue={modifyValue}/>
      <ValueViewer value={counterValue}/>
      <CounterButton type={'increment'} onChangeValue={modifyValue}/>
=======

function App() {

  const [ value , setValue ]= useState(0)
  const [ modifiedBy , setModifiedBy ]= useState(0)
  const changeValue = (newValue) => {
    setValue(newValue + value)
  }
  return (
    <div className="App">
      <CounterButton type={'increment'} onChangeValue={changeValue} value={modifiedBy}/>
      <ValueViewer value={value}/>
      <CounterButton type={'decrement'} onChangeValue={changeValue} value={modifiedBy}/>
>>>>>>> feature/react-unit-testing
    </div>
  );
}

export default App;
