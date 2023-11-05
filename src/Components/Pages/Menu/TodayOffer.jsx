import React from 'react';
import Menus from '../../Shared/Menus';
import SectionTitle from '../../Shared/SectionTitle';
import UseMenu from '../../Hooks/useMenu';
import MenuCategory from '../../Shared/MenuCategory';

const TodayOffer = () => {
    const [menu] = UseMenu()

    
    const offered = menu.filter((item) => item.category === "offered");
    console.log(offered);

    return (
        <div className='w-4/5 mx-auto'>
            <SectionTitle subTitle="Don't miss" title="TODAY'S OFFER"/>
            <MenuCategory menu={offered}/>
            
        </div>
    );
};

export default TodayOffer;