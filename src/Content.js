import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'; 

const CONTENT = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: 'WakeUp'
        },
        {
            id: 2,
            checked: false,
            item: 'Workout'
        },
        {
            id: 3,
            checked: false,
            item: 'Read'
        }
    ])
  return (
    <main>
        <ul className='listItems'>
            {items.map((item)=>(
                <li className='itemlist' key={item.id}>
                    <label className='container'>
                        <input type="checkbox" checked = {item.checked} />
                        <div className="checkmark"></div>
                    </label>
                    <label className='item-name'>{item.item}</label>
                <button className='deleteButton'>
                    <FontAwesomeIcon icon={faTrash} className='delete-icon'/>
                </button>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default CONTENT