import React from "react";
import "./Menu.css";


const Menu = ({ user, isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          ToDO App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <> and </> is a fragment, which let you group multiple JSX elements without adding extra nodes to the DOM. */}
          {isLoggedIn && (
            <>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#dashboard"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#My Todos">
                    Todos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#profile">
                    Profile
                  </a>
                </li>
              </ul>

              {/* multiple jsx elements */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#logout">
                    Logout
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
