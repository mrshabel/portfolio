import profile from "../assets/images/profile.jpg";
const About = () => {
  return (
    <div className="flex h-full ">
      <article className="flex flex-col justify-center flex-1 gap-8">
        <h1 className="text-5xl font-bold text-heading tracking-wide">
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
        <div className="w-[60%] h-[70%] border border-active rounded-xl">
          <img
            src={profile}
            alt="profile"
            className="bg-contain bg-no-repeat w-full h-full rounded-xl "
          />
        </div>
      </section>
    </div>
  );
};

export default About;
