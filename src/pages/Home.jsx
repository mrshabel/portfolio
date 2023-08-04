import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-8 ">
      <h2 className="text-active text-2xl tracking-wide">Hi, my name is</h2>
      <p className="text-7xl font-bold">Shabel Gumah</p>
      <p className="text-primary">
        I am a frontend developer who loves to make interactive websites .
      </p>
      <div className="">
        <Button label={"Contact"} />
      </div>
    </div>
  );
};

export default Home;
