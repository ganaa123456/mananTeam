import React from 'react'
import css from "./style.module.css";

const Search = (props) => {
  return (
    <div className={css.SearchContainer}>
    <input
      type="text"
      placeholder="Search..."
      onChange={props.onChange}
    />
  </div>
  )
}

export default Search