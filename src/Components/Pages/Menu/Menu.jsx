import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import img from "../../../assets/home/01.jpg";
import PopularItem from "../Home/PopularItem";
import TodayOffer from "./TodayOffer";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import MenuCategory from "../../Shared/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import UseMenu from "../../Hooks/useMenu";
import AllMenu from "./AllMenu";

const Menu = () => {
 
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        image={img}
        title="OUR MENU"
        SubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <AllMenu/>

      
    </div>
  );
};

export default Menu;
