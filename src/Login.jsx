import React from 'react'

const Login = () => {
    return (
        <div style={{margin: '5% auto', width: '300px'}}>
          <h1>Login</h1>
            <form action="action_page.php" method="post">
 

  <div >
    <label for="uname" style={{margin: '10px'}}><b>Username</b></label>
    <br />
    <input type="text" placeholder="Enter Username" name="uname" required/>
<br />
    <label for="psw" style={{margin: '10px'}}><b>Password</b></label>
   <br />
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" style={{backgroundColor: 'tomato', width: '100%'}}>Login</button>
    <label style={{margin: '0px 10px'}}>
    Remember me 
    </label>
      <input type="checkbox"  name="remember" style={{height: '20px'}}/> 
    <button type="button" class="cancelbtn" style={{backgroundColor: 'tomato', width: '100%'}}>Cancel</button>
    <br />
    <span class="psw">Forgot <a href="/">password?</a></span>
  </div>

</form>
        </div>
    )
}

export default Login
