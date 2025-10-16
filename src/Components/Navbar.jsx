import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signout successful");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/">Home2</NavLink>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar bg-neutral shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Email Auth</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold flex gap-5">
              {links}
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="cursor-pointer btn bg-[#d89056a2]">
              {user ? (
                <a onClick={handleSignOut}>SignOut</a>
              ) : (
                <Link to="/login">SignIn</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
