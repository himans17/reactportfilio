import { useState } from "react";
import "../App.css";
import "./TopHead.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function TopHead() {
  const [showMediaicon, setShowMediaIcon] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* logo */}
        <div className="logo">
          <h2>
            <span className="text-primary">Port</span>
            <span className="text-danger">folio</span>
          </h2>
        </div>
        {/* logo */}

        {/* 2nd Part */}
        <div
          className={showMediaicon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul className="menu-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Project">Contact</a>
            </li>
          </ul>
        </div>
        {/* 2nd Part */}

        {/* 3rd Part */}
        <div className="social-media">
          <ul className="socail-list">
            <li>
              <a
                href="https://www.linkedin.com/in/himanshu-kushwah"
                className="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://github.com/himans17"  className="instagram" traget="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
          {/* Hamburger Menu */}
          <div className="hamburger-menu">
            <a href="#hello" onClick={() => setShowMediaIcon(!showMediaicon)}>
              <GiHamburgerMenu />
            </a>
          </div>
          {/* Hamburger Menu */}
        </div>
        {/* 3rd Part */}
      </nav>
      {/* HERO SECTION */}

      {/* HERO SECTION */}
    </>
  );
}

export default TopHead;
