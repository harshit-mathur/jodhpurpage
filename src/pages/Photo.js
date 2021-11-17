import React from "react";
import { MenuList } from "../helpers/PhotoList";
import MenuItem from "../components/PhotoItem";
import "../styles/Photo.css";

function Photo() {
  return (
    <div className="menu">
      <h1 className="menuTitle">|  Gallery |</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photo;
