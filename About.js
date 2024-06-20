import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hello, I'm Barbara.
            <br className="hidden lg:inline-block" />I love to build apps that make an impact.
          </h1>
          <p className="mb-8 leading-relaxed">
          As a freelancer web developer for the past 3 years, I have engaged in remote work for startups, trained clients' on CMS platforms and worked alongside other developers to build applications for end users. I am persistent on acquiring new skills to be competitive in my field of work while keeping abreast with new technology.
          </p>
          <div className="flex justify-center">
            <a
              href="https://zabbyweekly.com/"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              See My Blog
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./code.png"
          />
        </div>
      </div>
    </section>
  );
}
