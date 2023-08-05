import React from "react";
import Button from "../components/Button";
import TypewriterText from "../components/Typewriter";

const Home = () => {
  return (
    <div className="h-full pt-[15vh] flex flex-col justify-center gap-8 ">
      <h2 className="text-active text-2xl tracking-wide">Hi, my name is</h2>
      <div className="text-5xl md:text-7xl font-bold">
        <TypewriterText text="Shabel Gumah " />
      </div>
      <p className="text-primary">
        I am a frontend developer who loves to make interactive websites
      </p>
      <div className="">
        <Button label={"Contact"} />
      </div>
    </div>
  );
};

export default Home;
