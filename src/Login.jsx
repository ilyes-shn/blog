import React, { useState } from "react";

const Login = () => {
  const [right, setRight] = useState(-250);

  function showMenu() {
    setRight(-50);
    console.log("clicked");
  }
  function hideMenu() {
    setRight(-250);
  }
  return (
    <div>
      <nav style={{ backgroundColor: "gray" }}>
        <a href="/">
          <img alt="" src="images/logo2.png" />
        </a>
        <div class="nav-links" id="navLinks" style={{ right: `${right}px` }}>
          <i class="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
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
            <li>
              <a
                href="/login"
                style={{
                  backgroundColor: "tomato",
                  color: "white",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                style={{
                  backgroundColor: "white",
                  color: "tomato",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
        <i class="fa fa-bars" onClick={showMenu}></i>
      </nav>

      <div style={{ margin: "5% auto", width: "300px" }}>
        <h1>Login</h1>
        <form action="action_page.php" method="post">
          <div>
            <label for="uname" style={{ margin: "10px" }}>
              <b>Username</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <br />
            <label for="psw" style={{ margin: "10px" }}>
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button
              type="submit"
              style={{ backgroundColor: "tomato", width: "100%" }}
            >
              Login
            </button>
            <label
              style={{ margin: "0px 10px", transform: "translateY(25px)" }}
            >
              Remember me
            </label>
            <input type="checkbox" name="remember" style={{ height: "20px" }} />
            <button
              type="button"
              class="cancelbtn"
              style={{ backgroundColor: "tomato", width: "100%" }}
            >
              Cancel
            </button>
            
            
            <button
              style={{ backgroundColor: "white", width: "100%",border: '1px solid tomato' }}
            >
              <a
              href="/register"
              style={{
                color: "tomato",
                textDecoration: 'none'
              }}
            >
              Register now
            </a>
            </button>
            
            <br />
            <br />
            <span class="psw">
              Forgot <a href="/">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
