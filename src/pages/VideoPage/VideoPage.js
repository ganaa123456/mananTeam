import React , {useState} from 'react';
import Videos from "../../components/Videos/Video"
import Navbar from '../../components/Navbar/Navbar';


const VideoPage = (props) => {
      
  
  return (

    <div>
      <Navbar onChange={(e) => props.setSearchValue(e.target.value)} />
      <Videos searchValue={props.searchValue} />
    </div>
  )
}

export default VideoPage