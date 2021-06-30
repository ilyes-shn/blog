import React, {useState} from 'react'

const Volunteers = () => {
  const [right, setRight] = useState(-200)
        
    
        function showMenu(){
            setRight(0) 
            console.log('clicked')
        }
        function hideMenu(){
            setRight(-200)
        }
    
      return (
        <div>
          <section className="sub-header">
            <nav>
              <a href="index.html">
                <img alt="" src="images/logo2.png" />
              </a>
              <div className="nav-links" id="navLinks" style={{right: `${right}px` }}>
                <i className="fa fa-times" onClick={hideMenu}></i>
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
                  <li><a href="/login" style={{backgroundColor: 'tomato', color: 'white', padding: '7px', borderRadius: '5px'}}>Login</a></li>
                  <li><a href="/register" style={{backgroundColor: 'white', color: 'tomato', padding: '7px', borderRadius: '5px'}}>Register</a></li>

                </ul>
              </div>
              <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
            <h1>Our Volunteers</h1>
          </section>
          <section className="OurVolunteers">
            <h1>What Our Student Says</h1>
            <p>a;lsdkjfalsdfjalsdkjfalsdjf</p>
    
            <div className="row" style={{overflow: 'hidden', display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: 'auto'}}>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user1.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Barbra Berkley</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
    
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-<!--------------about us content-----------------o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
              <div className="OurVolunteers-col">
                <img alt="" src="images/user2.jpg" />
                <div>
                  <p>alsjdf;lasdjfa;lsdjf;lad</p>
                  <h3>Margeret Hastings</h3>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
              </div>
            </div>
          </section>
    
          <section className="footer">
            <h4>About Us</h4>
            <p>
              We are a group of volunteers willing to help with everyday activities,
              chores around the home, or just a friend to spend time with
            </p>
            <div className="icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>
            <p>
              Made with <i className="fa fa-heart-o"></i> Made with Joy{" "}
            </p>
          </section>
        </div>
      );
    };
    

export default Volunteers
