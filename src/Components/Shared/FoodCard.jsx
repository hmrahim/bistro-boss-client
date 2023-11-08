import React, { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "../Hooks/useCart";

const FoodCard = ({food}) => {
  const {refetch} = useCart()
  const {user} = useContext(authContext)
  const location = useLocation()
  const navigate = useNavigate()
  const addToCart = (food)=> {
    const menu = {
      menuId:food._id,
      name:food.name,
      image:food.image,
      price:food.price,
      userEmail:user?.email
    }
    if(user){
      fetch("http://localhost:5000/cart",{
        method:"post",
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify(menu)
      })
      .then(res=>res.json())
      .then(res=> {
        if(res.insertedId){
          refetch()
          toast.success(food.name+" "+" added to cart!")
        }
      })
      .catch(error=> console.log(error))
    }else{
      // <Navigate to="/login" replace={true} state={{ from: location }}/>
      navigate("/login",{state:{from:location}})
    }
  }
  refetch()
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
          <button onClick={()=> addToCart(food)} className="btn btn-primary">Order Now</button>
        </div>
      </div>
      <span className="bg-black absolute px-2 text-white right-0 top-0 rounded-md">${food.price}</span>
    </div>
  );
};

export default FoodCard;
