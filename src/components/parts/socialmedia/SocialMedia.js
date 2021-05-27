import React from "react";

const SocialMedia = () => {
  return (
    <ul className="social-list list-inline py-3 mx-auto">
      <li className="list-inline-item">
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/DontWasteMyyyTime"
          target="_blank"
        >
          <i className="fab fa-facebook fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a
          rel="noopener noreferrer"
          href="https://github.com/jaskin21"
          target="_blank"
        >
          <i className="fab fa-github-alt fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/juskin.account/"
          target="_blank"
        >
          <i className="fab fa-instagram fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/renz-jaskin-agmata-03284a18a/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-fw"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
