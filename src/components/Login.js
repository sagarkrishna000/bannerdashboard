import React from "react";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#191919] p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back to</h2>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Dashboard</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-red-500 hover:bg-rose-600 text-white w-full py-2 rounded-md flex items-center justify-center space-x-2"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQTxgK4s6dLvXDjdU2ptgqQE2ty3g2iapSwm6NxGF9ZXkgXg4qqkzGr8FfTiQD0g9afw&usqp=CAU"
                alt="Google Logo"
                className="w-5 h-5"
              />
              <span>Sign In with Google</span>
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-white">
          <p className="text-gray-400">
            Don’t you have an account?{" "}
            <a href="/signup" className="text-red-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
