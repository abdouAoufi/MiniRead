import React from "react";

function Login() {
  return (
    <form className="flex flex-col pt-3 md:pt-8">
      <div className="flex flex-col pt-4">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex flex-col pt-4">
        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <input
        type="submit"
        defaultValue="Log In"
        className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      />
    </form>
  );
}


export default Login;