import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen text-white flex flex-col justify-center items-center text-center py-24 px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold animate-pulse">
        Hello, I'm Yash Katyan
      </h1>
      <p className="mt-4 text-xl sm:text-2xl font-light">
        A passionate developer who builds amazing digital experiences.
      </p>
      <div className="mt-8">
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all ease-in-out">
          Let's Build Something
        </button>
      </div>
    </section>
  );
};

export default Hero;
