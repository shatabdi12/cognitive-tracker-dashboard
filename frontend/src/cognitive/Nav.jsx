import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <h2 className="text-2xl font-bold mb-6">Tracker</h2>
      <ul className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-200 ${
              isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tests"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-200 ${
              isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`
          }
        >
          Tests
        </NavLink>
        <NavLink
          to="/patients"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-200 ${
              isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`
          }
        >
          Patients
        </NavLink>
      </ul>
    </div>
  );
}
