import React from 'react';
import Menus from './Menus';

const MenuCategory = ({menu}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-5">
        {menu.map((menu, index) => (
          <Menus key={index} menu={menu} />
        ))}
      </div>
        </div>
    );
};

export default MenuCategory;