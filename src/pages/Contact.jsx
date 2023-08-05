import Button from "../components/Button";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  return (
    <main className="flex flex-col items-center pt-[8vh] md:pt-[20vh] gap-5 md:gap-12 h-full ">
      <h1 className="text-2xl md:text-5xl font-bold text-heading tracking-wide text-center">
        Want to reach out?
      </h1>
      <section className="flex flex-col">
        <p className="text-primary text-center">
          Get in touch with me now for all your freelance jobs
        </p>
        <div className="mt-8 mx-auto ">
          <Button
            label={<a href="mailto:shabel500@gmail.com">Send an Email</a>}
          />
          <p className="text-center mt-5">OR</p>
          <div className="flex items-center justify-center mt-5 gap-6">
            <a
              href="https://wa.link/yebno6"
              className="hover:text-active hover:scale-105 transition-all duration-300"
            >
              <BsWhatsapp size={"2em"} />
            </a>
            <a
              href="https://www.linkedin.com/in/shabel-gumah"
              className="hover:text-active hover:scale-105 transition-all duration-300 "
            >
              <AiFillLinkedin size={"2.2em"} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
