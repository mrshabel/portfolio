import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="text-heading flex justify-end md:justify-between py-4">
      <h2 className="text-active font-bold tracking-widest hidden md:block ">
        Sha.Bel
      </h2>
      <nav className="hidden sm:flex gap-5 mt-0  justify-between bg-dark w-[30%] font-bold tracking-widest text-sm">
        {navLinks.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.path}
            className={({ isActive }) =>
              isActive ? "text-active" : "hover:text-active"
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>

      <div
        className={`transition-all duration-500 h-full sm:hidden z-50 bg-dark w-[100%] ${
          isOpen ? "fixed left-0 top-0" : "fixed left-[-100%] top-0"
        } `}
      >
        <div className="h-full flex flex-col pt-[5vh] px-5">
          <div
            className="place-self-end cursor-pointer "
            onClick={handleToggle}
          >
            <AiOutlineClose size={"1.5em"} />
          </div>

          <ul className=" flex flex-col items-center gap-10 px-4 pt-12">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="py-1 font-normal "
                onClick={handleToggle}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-active" : "hover:text-active"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sm:hidden p-2 cursor-pointer" onClick={handleToggle}>
        {isOpen ? <AiOutlineClose /> : <RiMenu3Line />}
      </div>
    </header>
  );
}
