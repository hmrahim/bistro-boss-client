import React, { useContext } from "react";
import img from "../../assets/others/authentication2.png";
import bg from ".././../assets/reservation/wood-grain-pattern-gray1x.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { toast } from "react-toastify";

const ForgotPassowrd = () => {
  const { resetPassword } = useContext(authContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const forgotPassword = (data) => {
    const email = data.email;

    resetPassword(email)
      .then((res) => {
        toast.success("Password send to your email! please check your email");
      })
      .then((error) => {
        toast.error(error.message);
      });
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
            <h1 className="text-2xl font-bold text-center">
              Forgot Password Now !
            </h1>
            <form onSubmit={handleSubmit(forgotPassword)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email field is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Please provide a valid e-mail addres!",
                    },
                  })}
                />
                <label className="label">
                  {errors?.email && (
                    <span className="label-text text-red-600">
                      {errors?.email?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral">Send</button>
                <p className="mt-3">
                  You dont have any account?{" "}
                  <Link className="text-blue-700 " to="/register">
                    go to register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassowrd;
