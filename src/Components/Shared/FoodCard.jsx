import React from "react";

const FoodCard = ({food}) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={food.image}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.name}</h2>
        <p>{food.recipe}</p>
        <div className="card-actions justify-center text-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
