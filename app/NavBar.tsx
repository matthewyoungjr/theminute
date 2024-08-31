import { navLinks } from "./routes/nav-links";
import { Link } from "next-view-transitions";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="flex justify-between border-b p-2 items-center shadow-sm">
      <span className="font-semibold text-lg ml-5 md:text-base">
        The Minute
      </span>

      <ul className="flex space-x-5 items-center">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="hidden md:inline md:text-base lg:text-base"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {/* <SideNav /> */}
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
