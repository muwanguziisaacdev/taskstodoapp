import './App.css';
import HEADER from './Header';
import CONTENT from './Content';
import FOOTER from './Footer';
import React, { useEffect, useState } from 'react'
import ADDTASK from './AddTask';
import SEARCHTASK from './searchTask';

function App() {
  const [add, setAdd] = useState('');
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const API_URL = 'http://localhost:3500/items'
//HANDLING THE DELETE AND THE CHECK TASKS 
const handleDelete = (id)=>{
    const tasklist = tasks.filter((task)=>(task).id !==id ? task : 0);
    setTasks(tasklist);
}
const handleCheck = (id)=> {
    const tasklist = tasks.map((task)=>task.id === id ? { ...task, checked: !task.checked} : task);
    setTasks(tasklist);
}

useEffect(()=>{
  const fetchTasks = async() => {
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw Error('Did not fetch the expected data');
      const tasklist = await response.json();
      setTasks(tasklist)
    }
    catch(err) {
      setFetchError(err.message);
    }
  } 
  
  (async()=> await fetchTasks())();
}, [])
// ADDING THE TASKS AND SEARCHING THE TASKS
const handleAdd = (task)=>{
  const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
  const newTask = {id, checked:false, task}
  const tasklist  = [...tasks, newTask];
  setTasks(tasklist);
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
    <SEARCHTASK
    search={search}
    setSearch={setSearch}
    />
    <main>
    {fetchError && <p>{fetchError}</p>};
    {!fetchError && <CONTENT
    tasks = {tasks.filter(task => ((task.task).toLowerCase()).includes(search.toLowerCase()))} 
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    />}
    </main>
    <FOOTER 
      tasks = {tasks}
    /></>
  );
}

export default App;
