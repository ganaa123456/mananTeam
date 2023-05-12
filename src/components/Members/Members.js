import React from "react";
import temka from "../../assets/temka.jpg";
import amraa from "../../assets/amraa.jpg";
import altaa from "../../assets/alt.jpg";
import baaskaa from "../../assets/baasl.jpg";
import me from "../../assets/me.jpg";
import uuskuu from "../../assets/uusk.jpg";
import anand from "../../assets/anand.jpg";
import magnai from "../../assets/magnao.jpg";
import gunbilig from "../../assets/gunbilig.jpg";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const Members = (props) => {

  const members = [
    {
      "name": "Тэмүүжин",
      "photo": temka,
      "description": "Хүүхэн хочит тэмка гэдгээрээ алдаршсан нэгэн.",
      "facebook": "https://www.facebook.com/Temka0918",
      "instagram": "https://www.instagram.com/temuujin.temka.77985"
    },
    {
      "name": "Алтанбагана",
      "photo": altaa,
      "facebook": "https://www.facebook.com/altanbagana.demchig",
      "instagram": "https://www.instagram.com/d.altanbagana/"
    },
    {
      "name": "Магнайбаяр",
      "photo": magnai,
      "facebook": "",
      "instagram": "https://www.instagram.com/magnai_0608/",
      "facebook": "https://www.facebook.com/pro.pro.33046736"
    },
    {
      "name": "Амарсайхан",
      "photo": amraa,
      "instagram": "https://www.instagram.com/amraa_0618/",
      "facebook": "https://www.facebook.com/profile.php?id=100008368006200"
    },
    {
      "name": "Ананд",
      "photo": anand,
      "instagram": "https://www.instagram.com/dabi_desuu/",
      "facebook": "https://www.facebook.com/profile.php?id=100006140357143"
    },
    {
      "name": "Өсөхбаяр",
      "photo": uuskuu,
      "instagram": "https://www.instagram.com/uusku__/",
      "facebook": "https://www.facebook.com/profile.php?id=100005934433243"
    },
    {
      "name": "Ган-Эрдэнэ",
      "photo": me,
      "instagram": "https://www.instagram.com/ganaasgram/",
      "facebook": "https://www.facebook.com/profile.php?id=100018811390896"
    },
    {
      "name": "Баасан-Очир",
      "photo": baaskaa,
      "instagram": "https://www.instagram.com/b__skaaa/",
      "facebook": "https://www.facebook.com/bska.jz.3"
    },
    {
      "name": "Гүнбилиг",
      "photo": gunbilig,
      "instagram": "https://www.instagram.com/gunnnbe/",
      "facebook": "https://www.facebook.com/gunbilig"

    },
  ];
  return (
    <div className={css.GridContainer}>
      {members
        .filter((item) => {
          return props.searchValue.toLowerCase() === " "
            ? item
            : item.name.toLowerCase().includes(props.searchValue);
        })
        .map((el) => (
          <Link key={el.name} to="/members/detail" state={el} className={css.Griditem}>
            <img
              style={{ width: "250px", height: "300px" }}
              src={el.photo}
              alt="members"
            />
            <p>{el.name}</p>
           
          </Link>
        ))}
    </div>
  );
};

export default Members;
