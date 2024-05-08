import './App.css';
import HEADER from './Header';
import CONTENT from './Content';
import FOOTER from './Footer';
import React, { useEffect, useState } from 'react'
import ADDTASK from './AddTask';
import SEARCHTASK from './searchTask';
import APIREQUEST from './apiRequest';

function App() {
  const [add, setAdd] = useState('');
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = 'http://localhost:3500/items'
//HANDLING THE DELETE AND THE CHECK TASKS 
const handleDelete = async(id)=>{
    const tasklist = tasks.filter((task)=>(task).id !==id ? task : 0);
    setTasks(tasklist);

    const deleteOptions = {
      method: 'DELETE'
    }
    const apiReq = `${API_URL}/${id}`;
    const result = await APIREQUEST(apiReq, deleteOptions);
    if(result) setFetchError(result);
}
const handleCheck = async(id)=> {
    const tasklist = tasks.map((task)=>task.id === id ? { ...task, checked: !task.checked} : task);
    setTasks(tasklist);

    const newTask = tasklist.filter((task) => task.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: newTask[0].checked})
    };
    const apiReq = `${API_URL}/${id}`;
    const result = await APIREQUEST(apiReq, updateOptions);
    if(result) setFetchError(result);
}


// ADDING THE TASKS AND SEARCHING THE TASKS
const handleAdd = async (task)=>{
  const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
  const newTasks = {id, checked:false, task}
  const tasklist  = [...tasks, newTasks];
  setTasks(tasklist);

  const postOptions ={
    method : 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newTasks)
  }
  const result = await APIREQUEST(API_URL, postOptions);
  if(result) setFetchError(result);
}
const handleSubmit = (e)=>{
  e.preventDefault();
  if(!add) return;
  handleAdd(add);
  setAdd('')
  
}
useEffect(()=>{
  const fetchTasks = async() => {
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw Error('Reload to fetch the to sync with the database');
      const tasklist = await response.json();
      setTasks(tasklist)
      setFetchError(null)
    }
    catch(err) {
      setFetchError(err.message);
    }
    finally {
      setIsLoading(false)
    }
  } 
  setTimeout(()=>{
    (async()=> await fetchTasks())();
  }, 2000)
  
}, []);
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
    {isLoading && <p className='loading '>Loading tasks............</p>}
    {fetchError && <p className='fetcherror'>{fetchError}</p>}
    {!fetchError && !isLoading && <CONTENT
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
