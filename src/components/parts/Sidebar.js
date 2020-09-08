import React from "react";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {
  return (
    <header className="header text-center">
      <h1 className="blog-name pt-lg-4 mb-0">
        <a href="index.html">Jaskin Agmata</a>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navigation" className="collapse navbar-collapse flex-column">
          <div className="profile-section pt-3 pt-lg-0">
            <img
              className="profile-image mb-3 rounded-circle mx-auto"
              src="assets/images/profile.jpg"
              alt="image"
            />

            <div className="bio mb-3">
              Hi, my name is Renz Jaskin Agmata. I'm a Junior Developer. For
              More Information, just click <a href="/about">here</a>
            </div>
            <SocialMedia />
            <hr />
          </div>
          <ul className="navbar-nav flex-column text-left">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <i className="fas fa-user fa-fw mr-2"></i>About Me
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-bookmark fa-fw mr-2"></i>Side Project
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className="my-2 my-md-3">
            <a className="btn btn-primary" href="About_me" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
