import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isStyleActivated = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#ee7133" : "black"
  });
  return (
    <ul>
      <li>
        <NavLink to="/" style={isStyleActivated} className="nav_items">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/exercises" style={isStyleActivated} className="nav_items">
          Exercises
        </NavLink>
      </li>
      <li>
        <NavLink to="/food" style={isStyleActivated} className="nav_items">
          Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/goaltracker"
          style={isStyleActivated}
          className="nav_items"
        >
          Goal
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
