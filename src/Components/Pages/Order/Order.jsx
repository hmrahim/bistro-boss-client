import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover";
import coverImage from "../../../assets/shop/banner2.jpg";
import FoodCard from "../../Shared/FoodCard";
import UseMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
const Order = () => {
  const {category} = useParams()
  const categories = ["salad","dessert","soup","pizza"]
  const initialIndex = categories.indexOf(category)
  const [tabindex, setTabindex] = useState(initialIndex);
  const [menu] = UseMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover image={coverImage} />
      <div className="w-full md:w-4/5 mx-auto px-5 md:px-0">
        <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
          <TabList className="flex items-center justify-center my-4">
            <Tab>Salad</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
              {salad.map((item) => (
                <FoodCard food={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {dessert.map((item) => (
                <FoodCard food={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {soup.map((item) => (
                <FoodCard food={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {pizza.map((item) => (
                <FoodCard food={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
