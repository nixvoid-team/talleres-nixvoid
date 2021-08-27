import { useState } from 'react';

import { CounterButton } from './components/counter-button/counter-button';
import { ValueViewer } from './components/value-viewer/value-viewer';
import './App.css';

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
    </div>
  );
}

export default App;
