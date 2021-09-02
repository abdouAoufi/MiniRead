import React from "react";

function Login() {
  return (
    <form className="flex flex-col pt-3 md:pt-8">
      <label className="flex flex-col-reverse relative focus group">
        <input
          placeholder="your@email.com"
          type="email"
          name="email"
          required
          className="border-2  rounded-sm border-primary outline-none px-4 py-3  leading-9"
        />

        <span className="ml-auto leading-10 opacity-0"> Required</span>
      </label>
      <label className="flex flex-col-reverse relative focus group">
        <input
          placeholder="Password"
          type="password"
          name="password"
          required
          className="border-2 rounded-sm border-primary outline-none px-4 py-3 leading-9"
        />

        <span className="ml-auto leading-10 text-red-400 opacity-0">
          {" "}
          Required
        </span>
      </label>

      <button
        type="submit"
        defaultValue="Log In"
        className="bg-black rounded-sm text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      >
        Log in
      </button>
    </form>
  );
}

export default Login;
