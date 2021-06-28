import React from 'react'

const Home = () => {
    return (
    <div>
    <section class="header">
    <nav>
      <a href="/"><img src="images/logo2.png" /></a>  
      <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
          <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>                      
              <li><a href="/services">SERVICES</a></li>
              <li><a href="/volunteers">VOLUNTEERS</a></li>
              <li><a href="/contact1">CONTACT</a></li>
          </ul>
      </div>
      <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>

    <div class="text-box">
        <h1>Friendly Helpers For Our Neighbors</h1>
        <p>Helping our neighbors is one of the easiest and friendliest ways
         to help our neighbors,<br/> find out how we help one
          another</p>
          <a href="registration.html" class="hero-btn">Join or find one today</a>
    </div>

</section>



<section class="course">
    <h1>Friends of the Community</h1>
    <p>Volunteering can help you make friends, learn new skills, <br/>advance your career, and even feel happier and healthier. Learn how to find the right volunteer opportunity for you.</p>

    <div class="row">
        <div class="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Cum et ipsum nisi vitae architecto neque dolores nobis. 
               Fugit ipsum ullam deleniti, omnis mollitia assumenda et, 
               dicta odit tempora veniam voluptatibus!</p>
        </div>
        <div class="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Cum et ipsum nisi vitae architecto neque dolores nobis. 
               Fugit ipsum ullam deleniti, omnis mollitia assumenda et, 
               dicta odit tempora veniam voluptatibus!</p>
        </div>
        <div class="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Cum et ipsum nisi vitae architecto neque dolores nobis. 
               Fugit ipsum ullam deleniti, omnis mollitia assumenda et, 
               dicta odit tempora veniam voluptatibus!</p>
        </div>
    </div>
</section>


<section class="campus">
    <h1>Our Global Campus</h1>
    <p>Lorem ipsum dolor, sit amet consectetur</p>
    
    <div class="row">
        <div class="campus-col">
        <img src="images/6.jpg"/>
        <div class="layer">
            <h3>LONDON</h3>
        </div>
        </div>
        <div class="campus-col">
        <img src="images/2.jpg"/>
        <div class="layer">
            <h3>NEW YORK</h3>
        </div>
    </div>
    <div class="campus-col">
        <img src="images/3.jpg"/>
        <div class="layer">
            <h3>WASHINGTON</h3>
        </div>
    </div>
    </div>
    

</section>



<section class="facilities">
    <h1>Our Facilities</h1>
    <p>a;lsdkjfalsdfjalsdkjfalsdjf</p>

    <div class="row">
        <div class="facilities-col">
            <img src="images/11.jpg"/>
            <h3>World Class Library</h3>
            <p>saldfjkas;ldhkas;dlhkasd</p>
        </div>
        <div class="facilities-col">
            <img src="images/8.jpg"/>
            <h3>Largest Play Ground</h3>
            <p>saldfjkas;ldhkas;dlhkasd</p>
        </div>
        <div class="facilities-col">
            <img src="images/9.jpg"/>
            <h3>Tasty and Healthy Food</h3>
            <p>saldfjkas;ldhkas;dlhkasd</p>
        </div>
    </div>

</section>



<section class="testimonials">
    <h1>What Our People in Need Say</h1>
    <p>Some of our Volunteers</p>

    <div class="row">
        <div class="testimonial-col">
            <img src="images/user1.jpg"/>
            <div>
                <p>Attentive and great conversationalist</p>
                <h3>Barbra Berkley</h3>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
        </div>
        <div class="testimonial-col">
            <img src="images/user2.jpg"/>
            <div>
                <p>Helped with the groceries and the dog</p>
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



<section class="cta">
    <h1>Join the community and help us build together</h1>
    <a href="" class="hero-btn">CONTACT US</a>
</section>




<section class="footer">

    <h4>About Us</h4>
    <p>We are a group of volunteers willing to help with
        everyday activities, chores around the home, or just 
        a friend to spend time with
    </p>
    <div class="icons">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-linkedin"></i>
    </div>
    <p>Made with <i class="fa fa-heart-o"></i> Made with Joy </p>
</section>
</div>
    )
}

export default Home
