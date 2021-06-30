import React from 'react'

const Register = () => {
  return (
      <div style={{margin: '5% auto', width: '300px'}}>
        <h1>Register</h1>
          <form action="action_page.php" method="post">


<div >
  <label for="uname" style={{margin: '10px'}}><b>Username</b></label>
  <br />
  <input type="text" placeholder="Enter Username" name="uname" required/>
<br />
  <label for="psw" style={{margin: '10px'}}><b>Password</b></label>
 <br />
  <input type="password" placeholder="Enter Password" name="psw" required/>

  <button type="submit" style={{backgroundColor: 'tomato', width: '100%'}}>Register</button>
  
</div>

</form>
      </div>
  )
}


export default Register
