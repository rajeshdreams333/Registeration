import React, { useState } from "react";
import { Link,} from "react-router-dom";
import validation from "./SignupValidation";
import axios from "axios";
function Sign() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      try {const response = await axios.post('/signup',values);
          console.log(response.data);
          }catch (error) {
        console.error(error.response.data);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-center text-lg">Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="font-bold" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            {errors.name && (
              <span className="text-danger text-xs"> {errors.name}</span>
            )}
          </div>
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
            Sign up
          </button>
          <p className="mb-2">You are agree to our terms and policies</p>
          <Link
            to="/Login"
            type="submit"
            className="py-1 px-3 w-full text-center  bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:ring focus:ring-indigo-400 focus:outline-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Sign;
