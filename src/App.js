import './App.css';
import HEADER from './Header';
import CONTENT from './Content';
import FOOTER from './Footer';
import React, { useState } from 'react'
import ADDTASK from './AddTask';
function App() {
  const [add, setAdd] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
//HANDLING THE DELETE AND THE CHECK TASKS 
const handleDelete = (id)=>{
    const tasklist = tasks.filter((task)=>(task).id !==id ? task : 0);
    setAndsave(tasklist);
}
const handleCheck = (id)=> {
    const tasklist = tasks.map((task)=>task.id === id ? { ...task, checked: !task.checked} : task);
    setAndsave(tasklist)
}
const setAndsave = (task)=>{
  setTasks(task)
  localStorage.setItem('tasklist', JSON.stringify(task));
}
// ADDING THE TASKS AND SEARCHING THE TASKS
const handleAdd = (task)=>{
  const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
  const newTask = {id, checked:false, task}
  const tasklist  = [...tasks, newTask]
  setAndsave(tasklist)
}
const handleSubmit = (e)=>{
  e.preventDefault();
  if(!add) return;
  handleAdd(add);
  setAdd('')
}
  return (
    <><HEADER />
    <ADDTASK
    add = {add}
    setAdd = {setAdd}
    handleSubmit = {handleSubmit}

    />
    <CONTENT
    tasks = {tasks} 
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    />
    <FOOTER 
      tasks = {tasks}
    /></>
  );
}

export default App;
