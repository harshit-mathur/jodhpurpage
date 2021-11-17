import React from "react";
import { MenuList } from "../helpers/GalleryList";
import MenuItem from "../components/GalleryItem";
import "../styles/Gallery.css";

function Photo() {
  return (
    <div className="menuu">
      <h1 className="menuTitleu">|  Gallery |</h1>
      <div className="menuListu">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photo;
