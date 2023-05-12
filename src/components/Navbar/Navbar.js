import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              onClick={() => {
                window.location.href = "/mananTeam";
              }}
            >
              Нүүр
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.location.href = "/videos";
              }}
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.location.href = "/members";
              }}
            >
              {" "}
              Гишүүд
            </Link>
          </li>
        </ul>
        <Search onChange={props.onChange} />
      </nav>
    </div>
  );
};

export default Navbar;
