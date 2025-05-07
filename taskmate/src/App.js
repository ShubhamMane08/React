import './App.css';
import {Header} from "./components/Header.js";
import {AddTask} from "./components/AddTask.js";
import {ShowTask} from "./components/ShowTask.js";
function App() {
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <ShowTask/>
    </div>
  );
}

export default App;
