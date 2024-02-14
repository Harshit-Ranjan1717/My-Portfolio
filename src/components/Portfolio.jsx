import React from "react";
import food from "../assets/My Portfolio pics/food.png";
import netflix from "../assets/My Portfolio pics/netflix.png";
import school from "../assets/My Portfolio pics/school.png";
import youtube from "../assets/My Portfolio pics/youtube.png";
import nike from "../assets/My Portfolio pics/nike.png";
import clone from "../assets/My Portfolio pics/clone.png";


const Portfolio = () => {
  const items = [

    {
      id: 1,
      src: netflix,
      href:"https://harshit1717netflix.netlify.app",
    },
    {
      id: 2,
      src:food,
    },
    {
      id: 3,
      src: youtube,
    },
    {
      id: 4,
      src: nike,
    },
    {
      id: 5,
      src:school,
    },
    {
      id: 6,
      src: clone,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {items.map(({ src, id,href }) => {
            return (
                <div key={id} className="shadow-md shadow-gray-600 hover:scale-105 duration-300">
                  <img src={src} alt="myWorks" className=" " />
                  <div className="flex items-center justify-center">
                    <a href={href} target="_blank" className="w-1/2 px-6 py-3 m-4 border  border-white rounded-md hover:border-red-600 ">Demo</a>
                    <button className="w-1/2 px-6 py-3 m-4 border border-white rounded-md hover:border-red-600">Code</button>
                  </div>
                </div>
            );
          })}
        </div>
        
      </div>

    </div>

    
  );
};

export default Portfolio;
