import React from 'react';
import '../pages/SignIn.css';

const Socials = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/praveennegi420" target="blank" className="social__link">
            <i className="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://praveennegi420.github.io/portfolio/"
            target="blank"
            className="social__link"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/praveennegi420"
            target="blank"
            className="social__link"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1tkW1rOX1Rpq-CEubAY3r1RN1uPCjotw-"
            target="blank"
            className="social__link"
          >
            <i className="ri-discord-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;