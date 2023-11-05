import React, { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((res) => {
        setMenu(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return [menu];
};

export default UseMenu;
