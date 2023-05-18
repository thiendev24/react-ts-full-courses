import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <>
      <div className="top-nav">
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : "")}
          to="/todos"
        >
          Todo List
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : "")}
          to="/user"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : "")}
          to="/countdown"
        >
          Countdown
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
