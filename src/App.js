import React, {useState} from 'react'
import './App.css';
//component Imports
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Mujeeb's Todo List</h1>
      </header>
      <Form todos = {todos} setTodos = {setTodos} setInputText = {setInputText} inputText = {inputText}/>
      <ToDoList/>
    </div>
  );
}

export default App;
