import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Showcase from "../../components/Showcase/Showcase";
import css from "./style.module.css";


const HomePage = () => {
  return (
    <div className={css.HomePage}>
      <div className={css.Navbar}>< Navbar /></div>
      
       <div><Showcase/></div>

    </div>
  );
};

export default HomePage;
