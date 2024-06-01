
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
        let list = todolist.map((value, index) => {

          return (
            <ToDoListItems key={index} value={value} indexnumber={index} todolist= {todolist} 
            setTodolist={setTodolist}
            />
          );
        });
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name='toname' placeholder="Enter Task" />
        <button type="submit">Add</button>
      </form>
    <div className='OuterDiv'></div>
      <ul>
        <h2>{list}</h2>
      </ul>
    </div>

  );
} 
export default App




function ToDoListItems({value, indexnumber, todolist, setTodolist}){

  let [status, setstatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((value,index)=>index!=indexnumber);
    setTodolist(finalData)
  }

  let checkstatus =()=>{
    setstatus(!status)
  }
  
  return(
    <li className={(status)? 'completetodo': '' } onClick={checkstatus}> {indexnumber + 1} {value}<span onClick={deleteRow}> &times; </span></li>
  )
}

