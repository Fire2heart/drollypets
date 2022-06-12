import React from 'react'
import './search.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Search({search, setSearch}) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='search'>
        <div className="search__icon"><AiOutlineSearch /></div>
        <input 
            className='search__input' 
            type="text"
            placeholder='search'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search