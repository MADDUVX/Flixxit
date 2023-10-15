import "./list.css";
import { useRef, useState } from "react";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
import ListItem from "../listitem/ListItem";

const List = function ({ list }) {
  const listRef = useRef();
  const [slideNumer, setSlideNumber] = useState(0);
  const clickLimit =window.innerWidth / 230;

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumer > 0) {
      setSlideNumber(slideNumer - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumer < 10-clickLimit) {
      setSlideNumber(slideNumer + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <>
      <div className="list">
        <span className="list-title">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
          />
          <div className="listcontainer" ref={listRef}>
            {list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default List;
