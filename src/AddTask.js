import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons'
const ADDTASK = ( { add, setAdd, handleSubmit } ) => {
  return (
    <form onSubmit= {(e)=>handleSubmit(e)} >
        <input 
        type="text" 
        placeholder='Add' 
        className='search'
        value={add}
        onChange={(e)=>setAdd(e.target.value) }
        />
        <button className='add-btn' >
          <FontAwesomeIcon
          onClick={handleSubmit}
          type='submit'
          icon={faAdd} 
          className='add'
          />
        </button>
    </form>
  )
}

export default ADDTASK