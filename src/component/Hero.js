import React from "react";
import "../App.css";
import "./Hero.css";
import { FaHeart } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../images/hero-back.png";
import login from "../images/login.png";
import typing from "../images/typing.png";
import laptop from "../images/laptop-screen.png";
import html from "../images/html.png";
import css from "../images/css-3.png";
import bootstrap from "../images/bootstrap.png";
import js from "../images/java-script.png";
import reactlogo from "../images/atom.png";
import wordpress from "../images/wordpress.png";
import git from "../images/git.png";
import work1 from "../images/a1cashloans.png";
import work2 from "../images/cismycro.png";
import work3 from "../images/maxmoneymart.png";
import work4 from "../images/sefoods.png";
import work5 from "../images/wekcare.png";
import work6 from "../images/makemypolicy.png";
import resume from "../images/HIMANSHU-KUSHWAH.pdf";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 align-items-center m-auto d-flex">
              <div className="text m-auto">
                <h1 className="py-2 text-writer sm-text-center">
                  Hi I'm Himanshu & I'm<br></br>
                  <span
                    className="text-writer"
                    style={{ color: "#E96D71", fontWeight: "bold" }}
                  >
                    <Typewriter
                      words={[
                        "Front End Developer",
                        "Web Designer",
                        "React Developer",
                      ]}
                      loop={[]}
                      cursor
                      cursorStyle="!"
                      typeSpeed={100}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>{" "}
                <h2 className="about">
                  I'm a front end developer with 1 year of experince using Html,
                  Css, Bootstrap, Js, React!
                </h2>
                <a
                  href={resume}
                  download={resume}
                  className="btn btn-outline-warning resume-btn mt-3"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 d-flex justify-content-center">
              <img className="coding-image py-2 swing" src={img1} alt=""></img>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}
      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-10 py-5 m-auto bg-dark about-border">
              <div className="row">
                <div className="col-md-6 m-auto d-flex justify-content-center">
                  <img src={login} alt="laptop" className="laptop"></img>
                </div>
                <div className="col-md-6 about-text">
                  <div className="about-one d-flex">
                    <div>
                      <img src={typing} alt="typing" className="typing"></img>
                    </div>
                    <div>
                      <h5 className="text-light ms-2">
                        SANDLUS INFO SOLUTIONS
                      </h5>
                      <h6 className="text-light ms-2">Oct 2023 - March 2024</h6>
                      <ul className="text-light">
                        <li>
                          Design and develop responsive and interactive user
                          interfaces using HTML, CSS, and JavaScript.
                        </li>
                        <li>
                          Design a logical and organized information
                          architecture for the ERP system, ensuring easy
                          navigation and accessibility of critical
                          functionalities.
                        </li>
                        <li>
                          Write clean, well-organized, and maintainable code for
                          efficient frontend development.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-one d-flex mt-2">
                    <div>
                      <img src={laptop} alt="typing" className="typing"></img>
                    </div>
                    <div>
                      <h5 className="text-light ms-2">APPOSYS</h5>
                      <h6 className="text-light ms-2">JAN 2023 - JUNE 2023</h6>
                      <ul className="text-light">
                        <li>
                          Design and develop responsive and interactive user
                          interfaces using HTML, CSS, and JavaScript.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      {/* SKILL SECTION */}
      <section className="skill mt-5">
        <div className="container">
          <div className="row">
            <h1 className="text-light text-center mb-5">Skills</h1>
            <div className="col-md-10 m-auto">
              <div className="row justify-content-center">
                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img src={html} className="skill-icon" alt="html"></img>
                    <div className="skill-text">
                      <h2>HTML</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img src={css} className="skill-icon" alt="html"></img>
                    <div className="skill-text">
                      <h2>CSS</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img
                      src={bootstrap}
                      className="skill-icon"
                      alt="html"
                    ></img>
                    <div className="skill-text">
                      <h2>BOOTSTRAP</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img src={js} className="skill-icon" alt="html"></img>
                    <div className="skill-text">
                      <h2>JAVASCRIPT</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img
                      src={reactlogo}
                      className="skill-icon"
                      alt="html"
                    ></img>
                    <div className="skill-text">
                      <h2>REACT</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img
                      src={wordpress}
                      className="skill-icon"
                      alt="html"
                    ></img>
                    <div className="skill-text">
                      <h2>WORDPRESS</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 mb-2">
                  <div className="skill-div">
                    <img src={git} className="skill-icon" alt="html"></img>
                    <div className="skill-text">
                      <h2>GIT</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SKILL SECTION */}
      {/* PROJECTS SECTION */}
      <section id="project" className="projects mt-5">
        <div className="container">
          <div className="row mb-3">
            <h1 className="text-light text-center mb-5">My Work</h1>
            {/* PROJECT 1 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work1} alt="work-1"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    A1cashloans Is A Loan Providing Company In USA. Its Also
                    Provide Payday Loans.
                  </p>
                  <p className="text-light text-center">
                    With very easy and secure process on A1 Cash Loans. From the
                    comfort of our home on your mobile or laptop just request
                    quick loan onile without steping out or visiting any store.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://A1cashloans.com"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 1 */}
            {/* PROJECT 2 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work2} alt="work-2"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    Cismycro is a telecommunition and electronic security
                    integrator that provide innovative solutions your bussiness
                    needs.
                  </p>
                  <p className="text-light text-center">
                    Streamline your network and maximize data flow by utilizing
                    data network. Increase security and streamlining access
                    control.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://cismycro.com"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 2 */}
            {/* PROJECT 3 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work3} alt="work-3"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    Max Money Mart is one of the most trusted lending companies.
                    Founders of Max Money Mart have helped thousands of
                    consumers in the financial service industry since 1993.
                  </p>
                  <p className="text-light text-center">
                    Our professional staff are hand-picked to provide the very
                    best customer service.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://maxmoneymart.com/"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 3 */}
            {/* PROJECT 4 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work4} alt="work-4"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    Seafoods is a ERP Software.An ERP software system is a set
                    of integrated applications or modules for managing a
                    company's core business processes – including finance and
                    accounting, supply chain, HR, procurement, sales, inventory
                    management, and more.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://inventorycrm.com/bk_admin/"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 4 */}
            {/* PROJECT 5 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work5} alt="work-5"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    Wekcare is a project about the benefits of Kangen Water in
                    our daily Life.
                  </p>
                  <p className="text-light text-center">
                    Kangen Water—a revolutionary ionized alkaline water known
                    for its potential health benefits. Learn how this powerful
                    water can hydrate, detoxify, and support overall well-being.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://wekcare.in"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 5 */}
            {/* PROJECT 6 */}
            <div className="col-md-4 my-2">
              <div className="work">
                <div className="work-img">
                  <img src={work6} alt="work-5"></img>
                </div>
                <div className="work-text">
                  <p className="text-light text-center">
                    Make My Policy is a Insurance Policy website which Provide
                    different type of Incurance.
                  </p>
                  <p className="text-light text-center">
                    Insurance is a contract, represented by a policy, in which a
                    policyholder receives financial protection or reimbursement
                    against losses from an insurance company.
                  </p>
                </div>
                <div className="visit-btn mb-2 m-auto d-flex">
                  <a
                    href="https://himans17.github.io/makemypolicy"
                    className="m-auto btn mb-3 btn-warning"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            {/* PROJECT 6 */}
          </div>
        </div>
      </section>
      {/* PROJECTS SECTION */}

      {/* FOOTER SECTION */}
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-2">
              <h5 className="text-light text-center py-2">
                Designer With{" "}
                <span className="love">
                  <FaHeart />
                </span>{" "}
                By Himanshu
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER SECTION */}
    </>
  );
}

export default Hero;
