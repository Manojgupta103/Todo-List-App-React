
import './App.css'
import { useState } from 'react';

function App() {
    let [todolist,setTodolist] = useState([])

      let saveTodoList=(event)=>{

        
        let toname=event.target.toname.value;
        if(!todolist.includes(toname)){

        }
        else{
          alert("ToDo Name already Exist")
        }
        event.preventDefault();
        }  
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name='toname' placeholder="Enter Task" />
        <button type="submit">Add</button>
      </form>
    </div>

  );
} 
export default App
