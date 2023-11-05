import React from "react";
import { Parallax, Background } from 'react-parallax';

const Cover = ({ image, title, SubTitle }) => {
  return (

    
    <div
      className="hero h-[700px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" bg-black md:w-2/4 p-5 rounded-2xl opacity-75">
          <h1 className="mb-5 text-5xl font-bold text-white text-[85px]">{title}</h1>
          <p className="mb-5 text-xl">{SubTitle}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Cover;
