import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"

const Feathured = () => {
    return (
        <div className='mt-20 p-5 bg-fixed' style={{backgroundImage:`url(${featuredImg})`,backgroundSize:"cover",}}>
            <SectionTitle title="FROM OUR MENU" subTitle="Check it out"/>
            <div className='flex justify-center flex-col md:flex-row items-center w-3/4 mx-auto gap-16 my-20'>
                <div>
                    <img className='' src={featuredImg} alt="" />
                </div>
                <div>
                    <p className='text-2xl text-white'>March 20, 2023</p>
                    <h3 className='text-2xl text-white'>WHERE CAN I GET SOME?</h3>
                    <p className='text-xl text-white justify-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-base-100 text-white hover:text-black my-5 border-0 border-b-4 bg-transparent border-white'>Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Feathured;