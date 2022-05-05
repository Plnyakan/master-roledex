import React from 'react'
import './search.css';

const search = ({className, placeholder, onChangeHandler}) => (
    <input 
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
  )


export default search