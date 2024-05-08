
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'; 

const CONTENT = ( {tasks, handleCheck, handleDelete}) => {

  return (
    <>
        {tasks.length?
            <ul className='listtasks'>
                {tasks.map((task)=>(
                    <li className='itemlist' key={task.id}>
                        <label className='container'>
                            <input 
                            type="checkbox" 
                            checked = {task.checked}  
                            onChange={()=>handleCheck(task.id)}
                            />
                            <div className="checkmark"></div>
                        </label>
                        <label className='item-name'>{task.task}</label>
                    <button className='deleteButton'>
                        <FontAwesomeIcon icon={faTrash} className='delete-icon'
                        onClick={()=>handleDelete(task.id)}
                        />
                    </button>
                    </li>
                    ))
                }
            </ul>: 
        <h1 className='no-items'>Empty</h1>}
    </>
  )
}

export default CONTENT