
import './App.css'
import { useState } from 'react';

function App() {
    let [todolist,setTodolist] = useState([])

      let saveTodoList=(event)=>{


        let toname=event.target.toname.value;
        if(!todolist.includes(toname)){
          let finalDolist=[...todolist,toname];
          setTodolist(finalDolist)

        }
        else{
          alert("ToDo Name already Exist")
        }
        event.preventDefault();
        }  
        let list=todolist.map((value,index)=>{
          return (
            <ToDoListItems value={value}/>
          )
        })
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name='toname' placeholder="Enter Task" />
        <button type="submit">Add</button>
      </form>
    <div className='OuterDiv'></div>
      <ul>
        {list}
      </ul>
    </div>

  );
} 
export default App

function ToDoListItems({value}){
  return(
    <li>{value} <span>&times;</span></li>
  )
}
