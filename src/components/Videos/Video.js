import React from "react";
import ReactPlayer from "react-player";
import newYear from "../../assets/newYear.mp4";
import GuitarOne from "../../assets/guitarAltaa.mp4";
import GuitarTwo from "../../assets/guitarAmraa.mp4";
import GuitarThree from "../../assets/guitarAmraa-2.mp4";
import huchin from "../../assets/huchin.mp4";
import css from "./style.module.css";

const Video = (props) => {
  const arr = [
    {
      "description": "2023 оныг угтаж буй шинэ жил",
      "video": newYear,
    },

    {
      "description": "Гитар алтаа ба тэмка хослол",
      "video": GuitarOne,
    },
    {
      "description": "Гитар соло амраа бааскаагийн гитараар",
      "video": GuitarTwo,
    },
    {
      "description": "Гитар соло амраа тэмкагийн гитараар",
      "video": GuitarThree,
    },
    {
      "description": "хүчин 10 жил",
      "video": huchin,
    },
  ];
  return (
    <div className={css.Gridcontainer}>
      {arr
        .filter((item) => {
          return props.searchValue.toLowerCase() === " "
            ? item
            : item.description.toLowerCase().includes(props.searchValue);
        })
        .map((item) => (
          <div key={item.video} className={css.GridItem}>
            <ReactPlayer width={"300px"} url={item.video} controls={true} />

            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Video;
