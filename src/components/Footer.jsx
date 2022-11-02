import { Component } from "react";
import "../styles/FooterStyles.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>215</h1>
            <p>An official website of 215 room.</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
          <h4>Pages</h4>
          <a href="/homework">Homework</a>
          <a href="/homework">Clean</a>
          <a href="/homework">News</a>
          <a href="/homework">Profile</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
