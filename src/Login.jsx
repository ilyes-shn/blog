import React from 'react'

const Login = () => {
    return (
        <div>
            <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div >
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" style={{backgroundColor: 'tomato'}}>Login</button>
    <label>
    Remember me 
    </label>
      <input type="checkbox"  name="remember"/> 
    <button type="button" class="cancelbtn" style={{backgroundColor: 'tomato'}}>Cancel</button>
    <span class="psw">Forgot <a href="/">password?</a></span>
  </div>

</form>
        </div>
    )
}

export default Login
