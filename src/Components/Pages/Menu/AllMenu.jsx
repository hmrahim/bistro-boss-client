import React from "react";
import Cover from "../../Shared/Cover";
import MenuCategory from "../../Shared/MenuCategory";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import UseMenu from "../../Hooks/useMenu";
import TodayOffer from "./TodayOffer";


const AllMenu = () => {
    const [menu] = UseMenu()
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div className="w-full md:w-4/5 mx-auto px-5 md:px-0">
      <TodayOffer />

      <Cover
        image={saladImg}
        title="Salads"
        SubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory menu={salad} />

      <Cover
        image={soupImg}
        title="Soup"
        SubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory menu={soup} />
      <Cover
        image={dessertImg}
        title="Dessert"
        SubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory menu={dessert} />
      <Cover
        image={pizzaImg}
        title="Pizza"
        SubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory menu={pizza} />
    </div>
  );
};

export default AllMenu;
