import React from "react";

const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4 mt-auto">
        <div className="container">
          <div className="col-md-6">
            <h5>Todo App</h5>
            <p className="mb-01">Manage Your Task Efficiently</p>
            <p className="mb-0">
              <i className="bi bi-telephone">Contact: 9999080593</i>
            </p>
          </div>
        </div>

        <div className="col-md-6 text-md-end">
          <p className="mb-0">
            <a href="#about" className="text-light me-3">
              About
            </a>
            <a href="#contact" className="text-light me-3">
              Contact
            </a>
            <a href="#privacy" className="text-light me-3">
              Privacy
            </a>
          </p>
        </div>
        <small className="text-muted">
          &copy; {new Date().getFullYear()} Todo App. All rights reserved.
        </small>
      </footer>
    );};

    export default Footer;