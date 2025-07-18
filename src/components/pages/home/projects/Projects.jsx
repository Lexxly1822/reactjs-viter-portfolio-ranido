import React from "react";

function Projects() {
  return (
    <>
      {/* Projects */}
      <section className="bg-zinc-950 text-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
            Projects
          </h2>
          <div className="  items-center  grid md:grid-cols-3 gap-12">
            <div className="bg-zinc-900 p-6  shadow-lg hover:shadow-xl transition">
              <div className="mb-6 w-full h-60 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                <img
                  src="/image/cat.webp"
                  alt="School"
                  className="w-full  object-cover"
                />
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-bold text-gray-500 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia, beatae.
                    </p>
                    <a className="text-red-500 " href="#">
                      Read More &rarr;
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6  shadow-lg hover:shadow-xl transition">
              <div className="mb-6 w-full h-60 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                <img
                  src="/image/cat.webp"
                  alt="School"
                  className="w-full  object-cover"
                />
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-bold text-gray-500 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia, beatae.
                    </p>
                    <a className="text-red-500 " href="#">
                      Read More &rarr;
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6  shadow-lg hover:shadow-xl transition">
              <div className="mb-6 w-full h-60 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                <img
                  src="/image/cat.webp"
                  alt="School"
                  className="w-full  object-cover"
                />
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-bold text-gray-500 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia, beatae.
                    </p>
                    <a className="text-red-500  " href="#">
                      Read More &rarr;
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
