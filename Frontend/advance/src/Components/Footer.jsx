import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <p>
        Images courtesy of <a href="http://unsplash.com/">unsplash</a>.
      </p>
      <p>
        Why are you even reading this?! There's never anything interesting in
        the footer!
      </p>
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-twitter-square fa-2x" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-facebook-square fa-2x" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-snapchat-square fa-2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;