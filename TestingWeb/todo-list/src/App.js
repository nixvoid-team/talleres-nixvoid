import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    if (event.which === 13) {
      const task = {
        title: event.target.value,
        done: false
      }
      setTasks(tasks.concat([task]));
      event.target.value = '';
    }
  }

  function markAsDone(task) {
    setTasks([].concat(tasks.map(t => {
      if (t.title === task.title) {
        return {
          title: task.title,
          done: !task.done
        }
      }
      return t;
    })));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Y si no quero hacer lo que me dices?
        </p>
        <a
          className="App-link"
          href="https://www.orce.uni.edu.pe"
          rel="noopener noreferrer"
        >
          Ir a ORCE
        </a>
        <input onKeyPress={event => addTask(event)} type="text" />
        <ul>
          {
            tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => markAsDone(task)}
                className={task.done ? 'done' : ''}
              >
                { task.title }
              </li>)
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
