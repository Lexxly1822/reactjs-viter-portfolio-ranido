import React from "react";
import Header from "../../partials/Header";

const Home = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col bg-gradient-to-r from-black to-blue-900 ">
        <Header />
        <section className=" py-36 ">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto justify-between   relative z-10 gap-6">
              <div>
                <p className=" mb-2   text-blue-100  ">LESLIE RANIDO</p>

                <h1 className="text-4xl md:text-4xl text-white font-bold mb-4 ">
                  Hello,I'm Leslie
                </h1>
                <p className="mb-5 text-white ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odio, est.
                </p>
                <div className="">
                  <button className="square rounded bg-blue-500 text-white  py-2 px-4">
                    View Portfolio
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className=" w-44 h-44 ">
                  <img src="image/cat.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-100 py-20 ">
          <div className="flex grid-cols-2 gap-2">
            <div className="bg-blue-900 text-center py-20 size-60 p-8 rounded-xl mb-8 shadow-md">
              <h1 className="text-xl md:text-4xl font-bold mb-4  text-white">
                ABOUT ME
              </h1>
            </div>
            <div className="bg-white text-center py-20 size-60 p-8 rounded-xl mb-8 shadow-md">
              <div>
                <p className="text-blue-900 font-bold">SKILLS</p>
                <p className="text-blue-900 font-bold">CONTACT</p>
                <p className="text-blue-900 font-bold">EDUCATION</p>
                <p className="text-blue-900 font-bold">EXPERIENCE</p>
              </div>
            </div>
            <div>
              <h1> </h1>
              <p className="mb-4 text-black m-5 ">
                Hi, I'm Leslie Rose R. Ranido, BS Computer Science at Bicol
                University Polangui who is interested in coding and discovering
                the world of technology.
              </p>
              <div className="m-4 py-2">
                <div className="">
                  <ul>
                    <p className="font-bold bg-white rounded text-center">
                      EDUCATION
                    </p>
                    <li >
                      Bicol University Polangui
                      <span className="font-bold"> - 2022-2025 </span>
                    </li>
                    <li>
                      Polangui General Comprehensive High School{" "}
                      <span className="font-bold"> - 2020-2022</span>
                    </li>
                    <li>Balogo National High School</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="m-4 py-2">
                  <div>
                    <ul>
                      {" "}
                      <p className="font-bold bg-white rounded text-center">
                        {" "}
                        EXPERIENCE
                      </p>
                      <li>
                        Jacinto & Lirio - 
                      </li>
                      <li>
                        Frontline Business Solution, Inc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
