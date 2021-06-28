import React from 'react'

const Volunteers = () => {
        const navLinks = document.getElementById("navLinks");
    
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
                <img alt="" src="images/logo2.png" />
              </a>
              <div class="nav-links" id="navLinks">
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
              <i class="fa fa-bars" onclick={showMenu}></i>
            </nav>
            <h1>Our Volunteers</h1>
          </section>
          <section class="OurVolunteers">
            <h1>What Our Student Says</h1>
            <p>a;lsdkjfalsdfjalsdkjfalsdjf</p>
    
            <div class="row">
              <div class="OurVolunteers-col">
                <img alt="" src="images/user1.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Barbra Berkley</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
    
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-<!--------------about us content-----------------o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
              <div class="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
              </div>
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
    

export default Volunteers
