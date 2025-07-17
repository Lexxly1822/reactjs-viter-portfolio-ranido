import React from "react";
import Header from "../../partials/Header";

const Home = () => {
  return (
    <>
      <div className="  min-h-screen flex flex-col bg-gradient-to-r from-black to-red-900  ">
        <Header />
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
            <div className="flex justify-center">
              <img
                src="image/mee.webp"
                alt="Leslie"
                className="w-72 h-72 square object-cover border-4 border-red-600"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-zinc-900 text-white py-24">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/*  Image */}
            <div className="flex justify-center">
              <img
                src="image/me2.webp"
                alt="About Leslie"
                className="w-72 h-72 object-cover rounded-lg border-8 border-red-600"
              />
            </div>

            <div>
              <h2 className="text-red-500 text-sm mb-2">About Me</h2>
              <h3 className="text-3xl font-bold mb-4">Who Am I?</h3>
              <p className="text-gray-300 mb-6">
                Hi, I'm Leslie Rose R. Ranido, a BS Computer Science student at
                Bicol University Polangui, passionate about web development, and
                discovering the world of technology.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                {/* Image  */}
                <div className="mb-4 w-full h-60 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/image/bup.webp"
                    alt="School"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text  */}
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-bold text-white">
                      Bicol University Polangui
                    </span>{" "}
                    – Present
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* idk Section */}
        <section className="bg-black text-white py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What Can I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-2 text-red-500">
                  Lorem, ipsum.
                </h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, praesentium.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
