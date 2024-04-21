import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd} from '@fortawesome/free-solid-svg-icons'; 
const ITEMSACTION = () => {
  return (
    <form action="">
        
        <input type="text" placeholder='Search' className='search'/>
        <input type="text" placeholder='Add' className='add'/>
    </form>
  )
}

export default ITEMSACTION