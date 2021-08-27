import {useState} from 'react'
import { CounterButton } from './components/counter-button/counter-button';
import { ValueViewer } from './components/value-viewer/value-viewer';
import './App.css';


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
    </div>
  );
}

export default App;
