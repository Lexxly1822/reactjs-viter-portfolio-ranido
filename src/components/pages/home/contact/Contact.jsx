import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-zinc-950 text-white py-24" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
            Contact Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="leslieranido@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded text-white font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
