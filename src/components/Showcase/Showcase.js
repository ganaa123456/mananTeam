import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className={css.Showcase}>
      <div className={css.ShowcaseText}>
        <div className={css.Spinner}>
          <div className={css.Spinner}></div>
          <div className={css.Text}>МАНАН</div>
        </div>

        <Link className={css.ButtonText} to="/members">
          Гишүүд
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
