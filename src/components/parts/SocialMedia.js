import React from "react";

const SocialMedia = () => {
  return (
    <ul className="social-list list-inline py-3 mx-auto">
      <li className="list-inline-item">
        <a href="#">
          <i className="fab fa-facebook fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#">
          <i className="fab fa-github-alt fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#">
          <i className="fab fa-stack-overflow fa-fw"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#">
          <i className="fab fa-skype fa-fw"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
