import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const {data,refetch} = useCart()
  const { user, logOut } = useContext(authContext);

  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ["cart", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);

  //     return res.json();
  //   }
  // });

console.log(data);
  const Navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then((res) => {
        // <Navigate to="/login" />
        Navigate("/");
        toast.success("User logout success");
      })
      .catch((error) => toast.error(error.message));
  };

  const NavMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Now</Link>
      </li>
    </>
  );
  
  return (
    <div className="navbar fixed z-30 w-full mx-auto text-white opacity-70 text-base-100 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavMenu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
      </div>
      <div className="navbar-end ">
        <button className="btn mx-3">
          <FaShoppingCart className="text-2xl" />
          <div className="badge badge-secondary">+{data?.length}</div>
        </button>
        {user ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
  
};

export default Navbar;
