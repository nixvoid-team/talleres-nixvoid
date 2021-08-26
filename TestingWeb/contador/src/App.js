import {useState} from 'react'
import { CounterButton } from './components/counter-button/counter-button';
import { ValueViewer } from './components/value-viewer/value-viewer';
import './App.css';


function App() {

  const [ value , setValue ]= useState(0)
  const changeValue = (value) => {
    const newValue = value
    setValue(newValue)
  }
  return (
    <div className="App">
      <CounterButton type={'increment'} onChangeValue={changeValue}/>
      <ValueViewer value={value}/>
      <CounterButton type={'decrement'} onChangeValue={changeValue}/>
    </div>
  );
}

export default App;
