import React from "react";
// import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <h2 className="text-2xl font-bold mb-6">Tracker</h2>
      <ul className="nav-links">
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-300"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tests"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-300"
          }
        >
          Tests
        </NavLink>
        <NavLink
          to="/patients"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-300"
          }
        >
          Patients
        </NavLink>
      </ul>
    </div>
  );
}
