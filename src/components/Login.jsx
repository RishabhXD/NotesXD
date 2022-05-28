import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://mynotesxdbackend.herokuapp.com/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // saving auth token
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
        <main className="bg-gray-800 max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-full">
          <section>
            <h3 className="font-bold text-2xl">Welcome to NotesXD</h3>
            <p className="text-gray-600 pt-2">Log In.</p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  id="email"
                  name="email"
                  value={credentials.email}
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={onChange}
                  value={credentials.password}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3"
                />
              </div>

              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Log In
              </button>
              <Link to="/SignUp" className="link my-2">
                Not have an account yet?Sign Up
              </Link>
            </form>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Login;
