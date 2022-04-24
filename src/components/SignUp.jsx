import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    // saving auth token
    localStorage.setItem("token", json.authtoken);
    navigate("/");
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
            <p className="text-gray-600 pt-2">Sign Up.</p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  name="name"
                  id="name"
                  value={credentials.name}
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={onChange}
                  value={credentials.email}
                  type="email"
                  name="email"
                  id="email"
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
                  value={credentials.password}
                  onChange={onChange}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="cpassword"
                >
                  Confirm Password
                </label>
                <input
                  value={credentials.cpassword}
                  onChange={onChange}
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3"
                />
              </div>

              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign Up
              </button>
              <Link to="/login" className="link my-2">
                Already have an account? Login
              </Link>
            </form>
          </section>
        </main>
      </div>
    </section>
  );
};

export default SignUp;
