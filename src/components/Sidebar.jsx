import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary vh-100 fs-5"
      style={{ width: "300px" }}
    >
      <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2 active"
              to="/dashboard"
              aria-label="Dashboard"
            >
              <i className="bi bi-house-fill"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/messages"
              aria-label="Messages"
            >
              <i className="bi bi-chat-left"></i>
              Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/notifications"
              aria-label="Notifications"
            >
              <i className="bi bi-app-indicator"></i>
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/profile"
              aria-label="Profile"
            >
              <i className="bi bi-person-fill"></i>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/activity-logs"
              aria-label="User Activity Log"
            >
              <i className="bi bi-list-check"></i>
              User Activity Log
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/document-logs"
              aria-label="Document Log"
            >
              <i className="bi bi-list-check"></i>
              Document Log
            </Link>
          </li>
        </ul>

        <hr className="my-3" />

        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/settings"
              aria-label="Settings"
            >
              <i className="bi bi-gear-wide-connected"></i>
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/doc"
              aria-label="My Documents"
            >
              <i className="bi bi-file-earmark-medical"></i>
              My Documents
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/signout"
              aria-label="Sign out"
            >
              <i className="bi bi-door-closed"></i>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;