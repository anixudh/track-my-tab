import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
//import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1>
        <img src={logo} alt="logo" className="logo" />
        Track My Tab
      </h1>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/browse" className="nav-link">
        Browse
      </Link>
      <LogoutButton />
    </nav>
  );
};

export default Nav;
