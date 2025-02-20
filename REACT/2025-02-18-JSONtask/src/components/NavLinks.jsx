import { NavLink } from "react-router-dom";
import "./NavLinks.css";

function NavLinks() {
  return (
    <div className="navWrapper">
      <nav className="navigations">
        <ul className="navList">
          <li className="navItem">
            <NavLink className={"navLink"} to="/" end>
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className={"navLink"} to="/Users" end>
              Users
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className={"navLink"} to="/Albums" end>
              Albums
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className={"navLink"} to="/Posts" end>
              Posts
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className={"navLink"} to="/Comments" end>
              Comments
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavLinks;
