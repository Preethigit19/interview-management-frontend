import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "230px",
        minHeight: "calc(100vh - 56px)"
      }}
    >
      <h5 className="mb-4">Menu</h5>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white">
            🏠 Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/candidates" className="nav-link text-white">
            👥 Candidates
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/add-candidate" className="nav-link text-white">
            ➕ Add Candidate
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;