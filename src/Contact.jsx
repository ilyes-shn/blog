import React, {useState} from 'react'

const Contact = () => {
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
      <div>
            <div class="form-top" style={{transform: "translateX(-13%)"}}>
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                        <div class="panel panel-danger">
                            <div class="panel-body">
                                <form id="reused_form">
                                    <div class="form-group">
                                        <label><i class="fa fa-user" aria-hidden="true"></i> Name</label>
                                        <input type="text" name="name" class="form-control" placeholder="Enter Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                                        <input type="email" name="email" class="form-control" placeholder="Enter Email"/>
                                    </div>
                                    <div class="form-group">
                                        <label><i class="fa fa-comment" aria-hidden="true"></i> Message</label>
                                        <textarea rows="3" name="message" class="form-control" placeholder="Type Your Message"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-raised btn-block btn-danger">Post &rarr;</button>
                                    </div>
                                </form>
                                <div id="error_message" style={{width:'100px', height:'100px', display:'none'}}>
                                    <h4>
                                        Error
                                    </h4>
                                    Sorry there was an error sending your form. 
                                </div>
                                <div id="success_message" style={{width:'100px', height:'100px', display:'none'}}>
<h2>Success! Your Message was Sent Successfully.</h2>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact
