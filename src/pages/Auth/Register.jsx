import React from "react";

function Register() {
  return (
    <div>
      <form
        className="flex flex-col pt-3 md:pt-8"
        onsubmit="event.preventDefault();"
      >
        <div className="flex flex-col pt-4">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
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
        <div className="flex flex-col pt-4">
          <label htmlFor="confirm-password" className="text-lg">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <input
          type="submit"
          defaultValue="Register"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
    </div>
  );
}

export default Register;
