import React, {useRef} from "react";

const About = () => {
  const Reff = useRef()
    const navLinks = Reff
  console.log(Reff)
    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }

  return (
    <div>
      <section class="sub-header">
        <nav>
          <a href="index.html">
            <img src="./images/logo2.png" />
          </a>
          <div class="nav-links" ref={Reff}>
            <i class="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/volunteers">VOLUNTEERS</a>
              </li>
              <li>
                <a href="/blog">BLOG</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <i class="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <h1>About Us</h1>
      </section>

      <section class="about-us">
        <div class="row">
          <div class="about-col">
            <h1>We are to help our Community</h1>
            <p>Become a volunteer or find one</p>
            <a href="" class="hero-btn red-btn">
              EXPLORE NOW
            </a>
          </div>
          <div class="about-col"></div>
          <img src="images/10.png" />
        </div>
      </section>

      <section class="footer">
        <h4>About Us</h4>
        <p>
          We are a group of volunteers willing to help with everyday activities,
          chores around the home, or just a friend to spend time with
        </p>
        <div class="icons">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
        </div>
        <p>
          Made with <i class="fa fa-heart-o"></i> Made with Joy{" "}
        </p>
      </section>
    </div>
  );
};

export default About;