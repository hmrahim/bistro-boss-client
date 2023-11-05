import React from "react";

const Menus = ({ menu }) => {
  return (
    <div className=" flex gap-5">
      <img
        src={menu.image}
        alt=""
        className="w-28 h-24"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div>
        <h3 className="text-xl space-x-3">{menu.name}--------------</h3>
        <p className="text-[16px] text-[#737373]">{menu.recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${menu.price}</p>
    </div>
  );
};

export default Menus;
