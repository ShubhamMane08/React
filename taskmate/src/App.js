import { useEffect, useState } from 'react';
import './App.css';
import {Header} from "./components/Header.js";
import {AddTask} from "./components/AddTask.js";
import {ShowTask} from "./components/ShowTask.js";

function App() {

  const [tasklist,setTasklist]=useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task,setTask]=useState({});

  useEffect(() => {
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist]);

  return (
    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} 
      setTasklist={setTasklist}
      task = {task}
      setTask={setTask}/>
      <ShowTask tasklist={tasklist} 
      setTasklist={setTasklist}
      task = {task}
      setTask={setTask}/>
    </div>
  );
}

export default App;
