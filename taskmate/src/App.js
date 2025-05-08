import { useState } from 'react';
import './App.css';
import {Header} from "./components/Header.js";
import {AddTask} from "./components/AddTask.js";
import {ShowTask} from "./components/ShowTask.js";

function App() {

  const [tasklist,setTasklist]=useState([]);

  return (
    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist}/>
    </div>
  );
}

export default App;
