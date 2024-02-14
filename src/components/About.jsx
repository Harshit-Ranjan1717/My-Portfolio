import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  border-b-4 inline border-red-600">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit
          exercitationem est a fuga tempora accusamus ipsam nemo ea natus quo
          aliquid voluptatum, officiis molestiae sapiente illo aut fugit?
          Placeat veritatis rerum aliquam ab nemo dolor natus excepturi
          corrupti. Amet iusto alias asperiores, praesentium maiores fuga at
          nulla expedita animi.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          maxime odio obcaecati expedita fuga asperiores distinctio accusantium
          sit, enim, dolores tempora reiciendis, aliquid ex. Qui, cupiditate
          laboriosam sed itaque esse consequuntur! Ratione, necessitatibus?
          Facilis, animi? Nobis molestias non corrupti quam dignissimos, ipsam
          debitis, nesciunt tempora voluptate iste consequuntur incidunt hic.
        </p>
      </div>
    </div>
  );
};

export default About;
