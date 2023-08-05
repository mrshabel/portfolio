import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-heading flex justify-end md:justify-between py-4">
      <h2 className="text-active font-bold tracking-widest hidden md:block ">
        Sha.Bel
      </h2>
      <nav
        className={`flex flex-col md:flex-row gap-5 mt-5 md:mt-0 items-center w-full md:justify-between md:w-[40%] lg:w-[30%] font-bold tracking-widest text-sm ${
          isOpen
            ? "block h-screen gap-12 pt-[15vh] z-10 "
            : "hidden md:flex md:justify-between"
        } `}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-active" : "hover:text-active"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-active" : "hover:text-active"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-active" : "hover:text-active"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-active" : "hover:text-active"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div
        className="block md:hidden "
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? <AiOutlineClose /> : <RiMenu3Line />}
      </div>
    </header>
  );
}
