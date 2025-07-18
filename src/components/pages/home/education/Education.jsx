import React from "react";
import CardEducation from "../../../partials/CardEducation";

const Education = () => {
  return (
    <>
      <section className="bg-zinc-950 text-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
            Education
          </h2>
          <div className="  items-center  grid md:grid-cols-3 gap-12">
            <CardEducation
              img={"/image/logo-1.webp "}
              school={" Bicol University Polangui "}
              year={"– Present "}
            />
            <CardEducation
              img={"/image/logo-2.webp "}
              school={" Polangui General Comprehensive High School "}
              year={"– 2020-2022 "}
            />
            <CardEducation
              img={"/image/logo-1.webp "}
              school={" Polangui General Comprehensive High School "}
              year={"– Present "}
            />

            {/* 2 */}
            {/* <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="mb-4 w-full h-60 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                <img
                  src="/image/logo-2.webp"
                  alt="School"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-bold text-white">
                    Polangui General Comprehensive High School
                  </span>{" "}
                  –2020-2022
                </li>
              </ul>
            </div> */}
            {/* 3 */}
            {/* <div className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="mb-4 w-full h-60  rounded overflow-hidden flex items-center justify-center">
                <img
                  src="/image/cat.webp"
                  alt="School"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="font-bold text-white">
                    Bicol University Polangui
                  </span>{" "}
                  – Present
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
