import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import Menus from "../../Shared/Menus";
import UseMenu from "../../Hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory";

const PopularItem = () => {
  const [menu] = UseMenu();
  const popularItem = menu.filter((item) => item.category === "popular");

  return (
    <section className="w-4/5 mx-auto flex flex-col items-center">
      <SectionTitle subTitle="Check it out" title="FROM OUR MENU" />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-5">
        {popularItem.map((menu, index) => (
          <Menus key={index} menu={menu} />
        ))}
      </div> */}
      < MenuCategory menu={popularItem}/>
      <button className="btn btn-neutral w-96 border-0 border-b-4 bg-transparent hover:text-white text-black">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularItem;
