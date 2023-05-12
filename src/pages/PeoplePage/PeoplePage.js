import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Members from '../../components/Members/Members'

const PeoplePage = (props) => {
  return (
    <div>
       <Navbar onChange={(e) => props.setSearchValue(e.target.value)} />
       <Members searchValue={props.searchValue}/>
    </div>
  )
}

export default PeoplePage