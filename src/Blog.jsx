import React from "react";

const Blog = () => {
  return (
    <div>
      <header>
        <h1>Our Blog</h1>
      </header>
      <div className="row">
        <div className="left-column">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <img src="images/10.png" alt="blog " />
            <p>Some text..</p>
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
            <img src="img/1.jpg" alt="blog " />
            <p>Some text..</p>
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
            <img src="img/5.jpg" alt="me" />
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <img src="img/1.jpg" alt="popular" />
            <img src="img/2.jpg" alt="popular" />
            <img src="img/3.jpg" alt="popular" />
          </div>
          <div className="card">
            <h3>Follow Me</h3>
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
