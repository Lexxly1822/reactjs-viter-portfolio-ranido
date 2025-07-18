import React from 'react'

const CardEducation = ({img,school,year}) => {
  return (
    <>
      <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <div className="mb-4 w-full h-60  rounded overflow-hidden flex items-center justify-center">
          <img
            src={img}
            alt="School"
            className="w-full  object-cover"
          />
        </div>

        <ul className="space-y-3 text-gray-300">
          <li>
            <span className="font-bold text-white">
             {school}
            </span>{" "}
           {year}
          </li>
        </ul>
      </div>
    </>
  );
}

export default CardEducation
