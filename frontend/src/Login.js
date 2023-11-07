import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import axios from "axios";
function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handdleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:5000/Login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigator("/Home");
          } else {
            alert("No data found");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="flex items-center justify-center bg-red-200 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="font-bold text-center text-lg">Login</h2>
        <form action="" onSubmit={handdleSubmit}>
          <div className="mb-3">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.email && (
              <span className="text-danger text-xs"> {errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.password && (
              <span className="text-danger text-xs"> {errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="py-1 px-3 w-full  bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:ring focus:ring-indigo-400 focus:outline-none"
          >
            Login
          </button>
          <p className="mb-2">You are agree to our terms and policies</p>
          <Link
            to="/Sign"
            type="submit"
            className="py-1 px-3 w-full text-center  bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:ring focus:ring-indigo-400 focus:outline-none"
          >
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
