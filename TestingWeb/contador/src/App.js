import { CounterButton } from './components/counter-button/counter-button';
import { ValueViewer } from './components/value-viewer/value-viewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterButton type='decrement'/>
      <ValueViewer value={25}/>
      <CounterButton type='increment'/>
    </div>
  );
}

export default App;
