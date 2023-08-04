import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";

export default function Sidebar() {
  return (
    <nav className="flex flex-col py-6 gap-6 justify-end items-center h-full px-1">
      <a href="https://www.github.com/mrshabel">
        <AiFillGithub size={"1.5em"} />
      </a>
      <a href="https://www.linkedin.com/in/shabel-gumah">
        <AiFillLinkedin size={"1.5em"} />
      </a>

      <a href="mailto:shabel500@gmail.com">
        <IoIosMail size={"1.5em"} />
      </a>

      <a href="https://www.twitter.com/mr_shabel">
        <BsTwitter size={"1.5em"} />
      </a>
    </nav>
  );
}
