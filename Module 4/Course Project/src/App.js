import React, { useState, useEffect } from "react";
import './App.css';
import short from 'short-uuid'
// Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const INITIAL_NOTES = [
  { id: short.generate(), name: 'Finish homework', done: true },
  { id: short.generate(), name: 'Clean the house', done: true },

]

function App() {

  // State
  const [inputText, setInputText] = useState(""); // hooks
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [noteInput, setnoteInput] = useState('')

  const [notes, setNotes] = useState(INITIAL_NOTES)

  function AddNote(e) {
     e.preventDefault()

     if (!noteInput || notes.some(n => n.name === noteInput)) return

     const uuid = short.generate()
     const newNote = { id: uuid, name: noteInput, done: false, pinned: false }
     const updateNotes = [...notes, newNote]
     setNotes(updateNotes)
     setnoteInput('')
   }
  // Run once when the app start
   useEffect(() =>{
     getLocalTodos();
   },[]);
  // Use effect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Save to local
  // const saveLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }
    const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      // JSON.parse(localStorage.getItem('todos'));
    // console.log(todoLocal);
    setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Note Taker </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <footer align="center">
      Note Taker App &copy; 2022
      </footer>
    </div>

  );
}

export default App;
