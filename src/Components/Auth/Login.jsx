import React, { useContext, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bg from ".././../assets/reservation/wood-grain-pattern-gray1x.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const Navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/"
  const {signInUser} = useContext(authContext)
  const [error,setError] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data)=> {
    const email = data.email
    const password = data.password
    signInUser(email,password)
    .then(res=>{
      toast.success("User Logged in succesfully")
      Navigate(from,{replace:true})

    })
    .catch(error=> {
      toast.error(error.message)
     

    })

  }
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="hero w-4/5   mx-auto  shadow-2xl p-5 rounded-lg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left flex justify-center items-center flex-col px-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <h1 className="text-2xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {
                    ...register("email",{
                      required:{
                        value:true,
                        message:"Email field is required"
                      },
                      pattern:{
                        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message:"Please provide a valid e-mail addres!"
                      }
                    })
                  }
                  
                />
                  <label className="label">
                {errors?.email &&  <span className="label-text text-red-600">{errors?.email?.message}</span> }
                </label>
              </div>
              <div className="form-control">
              
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {
                    ...register("password",{
                      required:{
                        value:true,
                        message:"Email field is required"
                      },
                     minLength:{
                      value:6,
                      message:"You have to provide more then 6 carrecter"
                     }
                    })
                  }
                
                />
                  <label className="label">
                {errors?.password &&  <span className="label-text text-red-600">{errors?.password?.message}</span> }
                </label>
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
                <p className="mt-3">You dont have any account? <Link className="text-blue-700 " to="/register">go to register</Link></p>
                <label className="label">
                <Link to="/forgotpassword" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
