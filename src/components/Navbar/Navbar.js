import React  from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = (props) => {
  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/mananTeam">Нүүр</Link>
          </li>
          <li>
            <Link to="/videos">ПОСТУУД</Link>
          </li>
          <li>
            <Link to="/members">Гишүүд</Link>
          </li>
          
        </ul>
        <Search onChange={props.onChange} />
      </nav>
    </div>
  );
};

export default Navbar;
