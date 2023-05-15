"use client";

// pages/login.js
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../authContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...", username, password);
    if (login(username, password)) {
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-[300px]">
      <form className="space-y-7" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">
          Enter the username and password for the admin page
        </h1>
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 text-black bg-white md:p-6 md:text-xl focus:outline-none rounded-xl"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="flex mx-auto px-8 py-4 text-xl font-bold maven-font rounded-xl bg-primary"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
