import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam
          at earum architecto optio illo inventore quia nemo ullam voluptatibus.
          Quae, aperiam excepturi iste accusamus illo eveniet sed quaerat
          dolorum suscipit nesciunt, maxime et doloribus harum odit asperiores
          consequuntur optio sapiente explicabo incidunt sequi iure provident
          sit? Perspiciatis, consectetur minus.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          deleniti aut adipisci dignissimos temporibus a facere natus neque
          aliquid eos. Sapiente ea nulla quasi non numquam nihil rem delectus
          eos sunt id quidem enim quae, ipsum veritatis eveniet soluta
          consequuntur magnam illo ipsa asperiores iure libero esse, sequi
          commodi. Ducimus!
        </p>
      </div>
    </div>
  );
}

export default About;
