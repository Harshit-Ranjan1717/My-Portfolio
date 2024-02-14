import React from "react";
import HeroImage2 from "../assets/heroImage2.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-10 text-white  h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl sm:w-[600px] font-bold">
            I am a  <span className="text-red-600">Full Stack </span>Developer
          </h2>
          <p className="  text-gray-400 pt-8 max-w-md">
            {" "}
            Lorem ipsum dolor sit ae, mollitia reprehenderit illo rem. Iusto
           a nobis aliquam asperiores non magni
           a nobis aliquam asperiores non magni
            quae fugiat.
          </p>
          <div className="mt-10">
            <Link to="portfolio" smooth duration={500} className=" cursor-pointer group w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className="pl-2 group-hover:rotate-90 duration-300">
                {" "}
                <MdArrowRightAlt size={25}/>
              </span>{" "}
            </Link>
          </div>
        </div>
        <div>
          <img 
            src={HeroImage2}
            alt="hero"
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-lg mt-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
