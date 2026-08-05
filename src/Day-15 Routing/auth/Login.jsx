import React from "react";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Signup from './Signup';
import Header from "../Components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    <Header/>
    <div className="w-full h-[80vh] flex justify-center items-center">
      <form
        action=""
        className=" max-w-120  w-full space-y-9 bg-white border-2  border-gray-300 p-8 rounded-xl  "
      >
        <div>
          <h2 className="text-xl text-black  font-semibold text-center">
            Login
          </h2>
          <p className="text-center text-gray-500 text-sm font-medium ">
            It will take 3 sec
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="font-semibold">
              Email<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
              className="mt-2 w-full outline-0 rounded p-2 ring-1 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold">
              Password<sup className="text-red-700 text-lg">*</sup>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter password"
                className="mt-5 mb-5 w-full outline-0 rounded p-2 ring-1 focus:ring-1 focus:ring-purple-600"
                required
              />
              <div
                className="absolute top-[30%] translate-[30%] right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full p-2.5 bg-black text-white tracking-wider font-semibold rounded-md text-while  mb-3  hover:cursor-pointer"
          >
            Login
          </button>
          <p className="text-center text-gray-500 ">
            Create an account ? &nbsp;
            <Link
              to="/signup"
              className="text-purple-500 font-medium hover:text-purple-600"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
