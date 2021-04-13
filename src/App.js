import './App.css';
//component Imports
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mujeeb's Todo List</h1>
      </header>
      <Form/>
      <ToDoList/>
    </div>
  );
}

export default App;
