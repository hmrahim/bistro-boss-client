import React from "react";
import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(authContext);
  

  const { refetch, data ,isLoading} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);

      // console.log(res);
      return res.json();
    },
  });

 
  return {data,refetch,isLoading};
};

export default useCart;
