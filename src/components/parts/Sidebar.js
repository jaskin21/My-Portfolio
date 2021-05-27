import React, { Component } from "react";
import SocialMedia from "./socialmedia/SocialMedia";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <header className="header text-center">

        {/* Blog User name */}
        {/* <h1 className="blog-name pt-lg-4 mb-0">
          <a href="index.html">Jaskin Agmata</a>
        </h1> */}

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

              <div className="bio">Hi! It's <b>Renz Jaskin Agmata</b> and Welcome to my Blog.</div>
              <SocialMedia />
              <hr />
            </div>
            <ul className="navbar-nav flex-column text-left">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="fas fa-user-tie fa-fw mr-2"></i>About Me
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/mini-projects">
                  <i class="fas fa-tasks fa-fw mr-2"></i>Mini Project
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/mini-projects">
                  <i class="fas fa-graduation-cap fa-fw mr-2"></i>Academic
                </a>
              </li>

            </ul>
            <div className="my-2 my-md-3">
              <a className="btn btn-primary" href="/Resume" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Sidebar;
