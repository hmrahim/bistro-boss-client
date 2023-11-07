import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bg from ".././../assets/reservation/wood-grain-pattern-gray1x.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { authContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Registr = () => {
  const {createuser} = useContext(authContext)
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();
  const [disabled, setDisabled] = useState(true);

  const signUpUser = (data) => {
    const email = data.email
    const password = data.password
    createuser(email,password)
    .then(res=> {
      toast.success("User creatd succesfully")
      reset()
    })
    .catch(error=> {
      toast.error(error.message)
    })
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const matchCaptcha = (e) => {
    const text = e.target.value;
    const validateData = validateCaptcha(text);
    if (validateData) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
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
            <h1 className="text-2xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleSubmit(signUpUser)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name field is required",
                    },
                  })}
                />
                 <label className="label">
                  {}
                 
                  {errors?.name &&  <span className="label-text text-red-600">{errors?.name?.message}</span> }
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email field is required",
                    },
                    pattern:{
                      value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message:"Please Provide a valid email addres"
                    }
                  })}
                />
                <label className="label">
                {errors?.email &&  <span className="label-text text-red-600">{errors?.email?.message}</span> }
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password field is required",
                    },
                    minLength:{
                      value:6,
                      message:"You have to provide more then 6 char"
                    }
                  })}
                />
                <label className="label">
                {errors?.password &&  <span className="label-text text-red-600">{errors?.password?.message}</span> }
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onMouseOut={matchCaptcha}
                  type="text"
                  placeholder="Type this captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
              
                <button disabled={disabled} className="btn btn-neutral">Login </button>
                <p className="mt-3">Already registerd? <Link className="text-blue-700 mt-2" to="/login">go to login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registr;
