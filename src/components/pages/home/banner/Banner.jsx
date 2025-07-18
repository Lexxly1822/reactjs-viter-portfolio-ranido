import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-black text-white py-36">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 mb-2 uppercase">Hello, My Name Is</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Leslie Ranido
            </h1>
            <p className="mb-6 text-gray-300">
              A passionate and dedicated junior developer, driven by the
              ever-evolving world of technology and its endless possibilities.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition">
              Contact Me
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center  ">
            <img
              src="image/me.png"
              alt="Leslie"
              className="w-72 h-72 rounded-full object-cover border-4 border-red-600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
