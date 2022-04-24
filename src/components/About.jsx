import React from "react";

const About = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg"
          alt="hero"
          src="https://i.pinimg.com/736x/57/8f/70/578f70e37ee144e0176124e4f0d218a4.jpg"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm RishabhXD
          </h1>
          <p class="leading-relaxed mb-8">
            I'm a Junior MERN Stack Web Developer, currently doing
            undergraduation computer Science. This is my first Full Stack
            Project for keeping day to day notes. It have CRUD support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
