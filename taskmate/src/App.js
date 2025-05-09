import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { AddTask } from './components/AddTask.js';
import { ShowTask } from './components/ShowTask.js';

function App() {
  // Safely retrieve and parse tasklist from localStorage
  let initialTasklist = [];
  try {
    const storedTasklist = localStorage.getItem('tasklist');
    if (storedTasklist) {
      initialTasklist = JSON.parse(storedTasklist);
    }
  } catch (e) {
    console.error('Failed to parse tasklist from localStorage:', e);
    localStorage.removeItem('tasklist'); // optional: clear corrupted data
  }

  const [tasklist, setTasklist] = useState(initialTasklist);
  const [task, setTask] = useState({});

  // Save to localStorage on tasklist change
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
