import React from "react";

const About = () => {
  return (
    <div className="flex h-full ">
      <article className="flex flex-col justify-center flex-1 gap-8">
        <h1 className="text-4xl font-bold text-heading tracking-wide">
          About me
        </h1>
        <p className="text-primary">
          Hello. I am Shabel, a computer science student and a frontend
          developer who loves to build fun and interactive projects with better
          user experience. I am open to exploring opportunities which would help
          elevate my career.
        </p>
      </article>
      <section className="flex justify-center items-center flex-1">
        <div className="w-[60%] h-[60%] border border-active"></div>
      </section>
    </div>
  );
};

export default About;
