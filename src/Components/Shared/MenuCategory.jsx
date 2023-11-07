import React from "react";
import Menus from "./Menus";
import { Link } from "react-router-dom";

const MenuCategory = ({ menu,title }) => {
  
  return (
    <div className="text-center my-20">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 text-left">
        {menu.map((menu, index) => (
          <Menus key={index} menu={menu} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="btn btn-neutral w-96 border-0 border-b-4 bg-transparent hover:text-white text-black">
        View Full Menu
      </Link>
    </div>
  );
};

export default MenuCategory;
