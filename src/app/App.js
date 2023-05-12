import VideoPage from "../pages/VideoPage/VideoPage";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import HomePage from "../pages/HomePage/HomePage";
import MemberDetail from "../pages/MemberDetailPage/MemberDetail";
import {Routes , Route} from "react-router-dom";
import React , {useState} from "react";



function App() {

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      
      <Routes >
        <Route path="/mananTeam" element={<HomePage />} />
        <Route  path="/videos" element={<VideoPage searchValue={searchValue} setSearchValue={setSearchValue} />} />
        <Route path="/members" element={<PeoplePage  searchValue={searchValue}  setSearchValue={setSearchValue}  />} />
        <Route path="/members/detail" element={<MemberDetail />} />

      </Routes>
    </div>
  );
}

export default App;
