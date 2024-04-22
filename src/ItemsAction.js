import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd} from '@fortawesome/free-solid-svg-icons'; 
const ITEMSACTION = ( { add, setAdd, handleAdd } ) => {
  return (
    <form onSubmit={(e)=>handleAdd(e)}>
        <input 
        type="text" 
        placeholder='Search' 
        className='search'
        value={add}
        onChange={(e)=>setAdd(e.target.value) }
        />
        <button></button>
        <input type="text" placeholder='Add' className='add'/>
    </form>
  )
}

export default ITEMSACTION