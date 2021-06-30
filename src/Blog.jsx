import React, {useState} from 'react'


const Blog = () => {
  const [right, setRight] = useState(-250)
        
    
  function showMenu(){
      setRight(-50) 
      console.log('clicked')
  }
  function hideMenu(){
      setRight(-250)
  }
  return (
    <div>
      <nav style={{backgroundColor: 'gray'}}>
      <a href="/"><img alt="" src="images/logo2.png" /></a>  
      <div class="nav-links" id="navLinks" style={{right: `${right}px` }}>
        <i class="fa fa-times" onClick={hideMenu}></i>
          <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>                      
              <li><a href="/services">SERVICES</a></li>
              <li><a href="/volunteers">VOLUNTEERS</a></li>
              <li><a href="/blog">BLOG</a></li>

              <li><a href="/contact">CONTACT</a></li>
              <li><a href="/login" style={{backgroundColor: 'tomato', color: 'white', padding: '7px', borderRadius: '5px'}}>Login</a></li>
              <li><a href="/register" style={{backgroundColor: 'white', color: 'tomato', padding: '7px', borderRadius: '5px'}}>Register</a></li>

          </ul>
      </div>
      <i class="fa fa-bars" onClick={showMenu}></i>
    </nav>
      <header>
        <h1>Our Blog</h1>
      </header>
      <div className="row blog">
        <div className="left-column">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <img src="images/10.png" alt="blog " />

            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <img src="images/1.jpg" alt="blog " />
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="card">
            <h2>About Me</h2>
            <img src="images/5.jpg" alt="me" style={{ height: "50%" }} />
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="card" style={{ overflow: "scroll" }}>
            <h3>Popular Post</h3>
            <img src="images/1.jpg" alt="popular" />
            <img src="images/2.jpg" alt="popular" />
            <img src="images/3.jpg" alt="popular" />
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>Some Text...</p>
          </div>
        </div>
      </div>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Blog;
