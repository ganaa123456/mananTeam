import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../components/Navbar/Navbar";

const MemberDetail = () => {
  const location = useLocation();
  const data = location.state;
  return (
     <div>
        <Navbar/>
          <div className={css.MemberDetail}>
      <div className={css.MemberContainer}>
        <img className={css.DetailPhoto} src={data.photo} alt="members" />
        <p>{data.name}</p>
        <p>{data.description}</p>
        <div className={css.Icon}>
        <Link to={data.facebook}>
          <FontAwesomeIcon icon={faFacebook} brand color="dodgerBlue" />
        </Link>
        <Link to={data.instagram}>
          <FontAwesomeIcon icon={faInstagram} brand color="blue"  />
        </Link>
        </div>
       
      </div>
    </div>
     </div>
    
  );
};

export default MemberDetail;
