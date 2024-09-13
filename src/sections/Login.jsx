import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/authenticated");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
        <h1 className="text-center font-bold text-3xl text-white">Login</h1>
        <form className="my-6" onSubmit={handleSubmit}>
          <input
            className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
          >
            Login
          </button>
          {error && (
            <span className="text-sm text-red-400">
              Wrong Email or Password.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
