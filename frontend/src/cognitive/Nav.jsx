import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <h2 className="text-2xl font-bold mb-6">Tracker</h2>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  ${
                isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-gray-700'
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tests"
            className={({ isActive }) =>
              `block px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  ${
                isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-gray-700'
              }`
            }
          >
            Tests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `block px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-gray-700'
              }`
            }
          >
            Patients
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
