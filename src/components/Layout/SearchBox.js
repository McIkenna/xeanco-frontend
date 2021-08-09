import React from 'react'

const SearchBox = (props) =>  {
    return (
        <div>
        
        <input 
        className="form-control me-4" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"

        value = {props.value}
        onChange={props.onChange}
                    />

        </div>
    )
}

export default SearchBox
