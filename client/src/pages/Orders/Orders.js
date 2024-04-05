import React from 'react'
import { useState } from 'react'
import filter from '../../assets/icons/filter.png'
import grid from '../../assets/icons/grid.png'
import list from '../../assets/icons/list.png'
import './Orders.scss'

export default function Orders() {
    const [isGrid, setIsGrid] = useState(true);

    const handleToggle = () => {
        setIsGrid(!isGrid)
    }

    
  return (
    <main>
        <section className='orders'>
            <section className='orders__heading-container'>
                <h1 className='orders__heading'>
                    Orders
                </h1>
            </section>
            <section className='orders__filter-container'>
                <img
                    className='orders__filter'
                    src={filter}
                    alt="filter icon" />
            </section>
            <div className='orders__checkbox'>  
                <label className='orders__label'>
                    <input 
                        className='orders__input' 
                        type="checkbox" 
                        id="toggle"
                        onChange={handleToggle}
                        checked={isGrid} /> 
                    <span class="orders__slider"></span>
                    <img
                        className='orders__toggle-icon'
                        id='grid-icon'
                        src={grid}
                        alt="grid view" />
                    <img
                        className='orders__toggle-icon'
                        id='list-icon'
                        src={list}
                        alt="list view" />

                </label>
                    
            </div>
        </section>
    </main>
  )
}
