import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function Sidebar() {
  return (
    <nav className="flex md:flex-col py-6 gap-6 justify-end items-center h-full px-1">
      <a
        href="https://www.github.com/mrshabel"
        className="hover:text-active hover:scale-110 transition-all duration-300"
      >
        <AiFillGithub size={"1.5em"} />
      </a>
      <a
        href="https://www.linkedin.com/in/shabel-gumah"
        className="hover:text-active hover:scale-110 transition-all duration-300"
      >
        <AiFillLinkedin size={"1.5em"} />
      </a>

      <a
        href="mailto:shabel500@gmail.com"
        className="hover:text-active hover:scale-110 transition-all duration-300"
      >
        <IoIosMail size={"1.5em"} />
      </a>

      <a
        href="https://wa.link/yebno6"
        className="hover:text-active hover:scale-105 transition-all duration-300"
      >
        <BsWhatsapp size={"1.4em"} />
      </a>

      <a
        href="https://www.twitter.com/mr_shabel"
        className="hover:text-active hover:scale-110 transition-all duration-300"
      >
        <BsTwitter size={"1.5em"} />
      </a>
    </nav>
  );
}
