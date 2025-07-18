import React from 'react'

const Skills = () => {
  return (
    <>
      {/* idk Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Can I Do</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-red-500">HTML</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, fugit!
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-red-500">CSS</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                dignissimos!
              </p>
            </div>
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
    </>
  );
}

export default Skills
