import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SEARCHTASK = ( {search, setSearch} ) => {
  return (
    <form onSubmit= { (e)=>e.preventDefault} >
        <input 
        type="text" 
        placeholder='Search' 
        className='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value) }
        />
        <button className='add-btn'>
          <FontAwesomeIcon
          type='submit'
          icon={faSearch} 
          className='add'
          />
        </button>
    </form>
  )
}

export default SEARCHTASK