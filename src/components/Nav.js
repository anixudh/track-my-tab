import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>Track My Tab</h1>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/browse" className="nav-link">
        Browse
      </Link>
    </nav>
  );
};

export default Nav;
