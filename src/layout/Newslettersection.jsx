import React from 'react';

const Newslettersection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-8 rounded-lg">
      {/* Left Section: Text and Form */}
      <div className="md:w-1/2 space-y-4">
        <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full">
          Join our newsletter
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Subscribe to see secret deals prices drop the moment you sign up!
        </h2>
        <form className="flex items-center space-x-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-auto p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-gray-500 text-sm">No ads. No trails. No commitments</p>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://wallup.net/wp-content/uploads/2019/09/364430-panda-pandas-baer-bears-baby-cute-1.jpg"
          alt="Pool with a water slide"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Newslettersection;
