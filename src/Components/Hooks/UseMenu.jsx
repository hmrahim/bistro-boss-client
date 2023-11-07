import React, { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((res) => {
        setMenu(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return [menu];
};

export default UseMenu;
