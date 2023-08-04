import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-heading flex justify-between items-center py-4">
      <h2 className="text-active font-bold tracking-widest ">Sha.Bel</h2>
      <nav className="flex justify-between md:w-[40%] lg:w-[30%] font-bold tracking-widest text-sm  ">
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
    </header>
  );
}
