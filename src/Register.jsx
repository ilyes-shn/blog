import React from 'react'

const Register = () => {
    return (
        <div style={{margin: '5%', padding: '10%'}}>
            <form action="action_page.php" method="post">

  <div >
    <label for="uname" style={{margin: '0px 10px'}}><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw" style={{margin: '0px 10px'}}><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" style={{backgroundColor: 'tomato'}}>Register</button>
    
  </div>

</form>
        </div>
    )
}

export default Register
