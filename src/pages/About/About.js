import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div className="bg-dark">
               <div className="container overflow-hidden">
            
                  
                   <div className="row mt-5">
                   
                    <div className="col-md-6 bg-image hover-zoom">
                    
                       <img className="about w-100" src="https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=" alt="" />
                    
                    </div>
                   
                    <Bounce top cascade>
                    <div className="col-md-6 text-white">
                       
                        <h1>BEST FOOD SERVICES <i className="fas fa-check text-success"></i></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquid obcaecati numquam eaque minus corrupti tempore harum repellat eos ratione reiciendis officiis iusto amet sunt eum molestiae! Iure, illum ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam officia vel aliquid sequi similique!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam eveniet maxime minima nobis quis dolores iusto eius, officia nemo quam voluptas voluptatibus consequatur ut.</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae!</h5>
                </div>
                </Bounce>
                <div className="mt-5">
                        <h1  className="text-warning banner-title">OUR TOP CLIENT SAYS <i class="fas fa-user-edit"></i></h1><hr className="text-secondary"/>
                        <Bounce> 
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                
                <div className="col ">
                 <div className="card h-100 bg-dark bg-image hover-zoom">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TvEjCBG6lzK_o5hGVFEdlo0GOj9vF2_o0Q&usqp=CAU" className="card-img-top img-fluid" alt="..."/>
                 <div className="card-body client">
                 <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
                        <i className="fa fa-star"></i>

		</span>

        <h6 className="text-info">Regina Miles</h6>
	    <h6 className="text-white">Mern- Stack <br /> Web Developer</h6>
      </div>
      <div className="card-footer">
       
      </div>
      </div>
      </div>
    
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiTCStLMnAqueJZVjbt3ObO72anODdVWzWw&usqp=CAU" className="card-img-top img-fluid" alt="..."/>
      <div className="card-body client">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
                     <i className="fa fa-star"></i>

	 </span>

      <h6 className="text-info">Oliver</h6>
	  <h6 className="text-white">Banker</h6>
      </div>
      
      </div>
      </div>
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4nGHEqm-u2clqinStzDtzgJB4D7QCsg3Ag&usqp=CAU" className="card-img-top img-fluid" alt="..."/>
      <div className="card-body client">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
                    <i className="fa fa-star"></i>

		</span>
        <h6 className="text-info">JAlebia</h6>
		<h6 className="text-white">Businessman</h6>
      </div>
     
      </div>
      </div>
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4FLQPK-VqE1Lid59nC6YtX3kz0YvRwXzgQ&usqp=CAU" className="card-img-top " alt="..."/>
      <div className="card-body client">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
                    <i className="fa fa-star"></i>

		</span>
        <h6 className="text-info">Roma</h6>
		<h6 className="text-white">Doctor</h6>
      </div>
     
      </div>
     </div>
                      
      </div>
      </Bounce> 
      </div>
      <div className="">
      <h1 className="fw-bold display-5 mt-5 text-warning banner-title">Latest Tips And Tricks <i class="fas fa-edit"></i></h1><hr className="text-secondary"/>
      <Zoom>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div className="col">
    <div className="card h-100 bg-image hover-zoom bg-dark border border-1">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/pexels-abhinav-goswami-291528-440x250.jpg" className="card-img-top" alt="..."/>
      <div className="card-body bg-dark">
        <h5 className="card-title text-info">Amazing Decadent Pecan PIE Best Cake</h5>
        <p className="card-text text-white ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div><hr className="text-info mx-auto w-75"/>
       <div className="card-footer d-flex ">
       <button type="button" className="btn btn-outline-info px-5">details</button>
                                 
        <h4 className="text-muted ps-5"> <i className="fas fa-heart text-danger "> <i className="fas fa-thumbs-up text-primary"> <i className="far fa-comment-alt text-secondary"></i></i></i></h4>
      </div>
    </div>
           </div>
           <div className="col">
           <div className="card h-100 bg-image hover-zoom bg-dark border border-1">
             <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-3-440x250.jpg" className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
            <h5 className="card-title text-info">Black Special Hot Suchi With Salad Serving</h5>
           <p className="card-text text-white">This card has supporting text below as a natural lead-in to additional content.</p>
           </div>
           <div className="card-footer d-flex ">
           <button type="button" className="btn btn-outline-info px-5">details</button>
                                 
           <h4 className="text-muted ps-5"> <i className="fas fa-heart text-danger "> <i className="fas fa-thumbs-up text-primary"> <i className="far fa-comment-alt text-secondary"></i></i></i></h4>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 bg-image hover-zoom bg-dark border border-1">
            <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-2-1-440x250.jpg" className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
             <h5 className="card-title text-info">Vegetable & Chicken Wrap For Lunch</h5>
             <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to .</p>
             </div>
             <div className="card-footer d-flex ">
              <button type="button" className="btn btn-outline-info px-5">details</button>
                                 
              <h4 className="text-muted ps-5"> <i className="fas fa-heart text-danger "> <i className="fas fa-thumbs-up text-primary"> <i className="far fa-comment-alt text-secondary"></i></i></i></h4>
              </div>
              </div>
              </div>
              </div>
              </Zoom> 
              </div>
              <div className="mt-5 ">
              <Bounce right cascade>    
              <h3 className="text-warning">TEAM MEMBERS</h3>
              </Bounce>
              <Bounce left cascade>
              <h1 className="fw-bold display-5 mt-4 text-warning banner-title">Meet Our Best Team <i class="fas fa-users"></i></h1><hr className="text-secondary mx-auto w-75"/>
              </Bounce>
      <Bounce>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
      <div className="col ">
      <div className="card h-100 bg-image hover-zoom">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team1.png" className="card-img-top" alt="..."/>
      <div className="card-body text-info">
             <h5 className="card-title text-info">Alizeh Anderson
             </h5>
             <p >Senior Chef</p>
              </div>
              <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
              </div>
              </div>
              </div>
              <div className="col">
              <div className="card h-100 bg-image hover-zoom">
              <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team2.png" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title text-info">Angelina John Doe
              </h5>
              <p className="card-text text-info">Master Chef</p>
              </div>
              <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
              </div>
              </div>
              </div>
              <div className="col">
              <div className="card h-100 bg-image hover-zoom">
              <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team4.png" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title text-info">Vegetable & Chicken Wrap For Lunch</h5>
              <p className="card-text text-info">Psychologist</p>
                    </div>
                     <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                     </div>
                     </div>
                     </div>
                     </Bounce>
                     </div>
                     </div>
            
       
                     <div className="faq mt-5">
                     <h1 className="display-3 fw-bold banner-title">FAQ</h1><hr />
                           <div className="row ">
                            <div className="second-info col-md-4 col-sm-12 mt-4">
                            <div className="">
                                <img src="https://i.pinimg.com/originals/3d/fe/6f/3dfe6f11c68d78de7a141ec5a122db7d.gif" alt="" />
                            </div>
                            <div className=""><hr />
                 <div className="d-flex justify-content-center ">
     
                 <div className="m-2 ">
                 <h3><i className="fab fa-facebook-square icon text-primary"></i></h3>
                 </div>
                 <div className="m-2 ">
                 <h3><i className="fab fa-instagram icon text-danger"></i></h3>
                 </div>
                 <div className="m-2">
                 <h3><i className="fab fa-linkedin icon text-primary"></i></h3>
                 </div>
                 <div className="m-2">
                 <h3><i className="fab fa-youtube text-danger icon  "></i></h3>
                 </div>
                 <div className="m-2">
                 <h3><i className="fab fa-twitter icon text-primary"></i></h3>
                 </div>
                 </div>
     
                 </div>
                        <div className="">
                            <h3>If you need more help</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Bounce>
                            <NavLink
                        to="/about"
                        className=" button btn btn-outline-warning rounded-pill fs-5 py-2 px-4"
                       >
                       Read more..
                       </NavLink>
                       </Bounce>
                    
                       </div>
                        </div>
                        <Fade right>
                    <div className="col-md-8 col-sm-12 mt-5 mb-3">
                      <div className="information p-3 m-3"><h3>Is it possible to pay by credit card?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>Can I return the product after purchase?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>How do I use a promotional code?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>What if the prepaid goods are not delivered?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>Is it possible to pay by credit card?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>Where and how can I exchange or refund?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>Where and how can I exchange or refund?<i className="fas fa-check text-success"></i></h3></div>
                      <div className="information p-3 m-3"><h3>And more options...<i className="fas fa-check text-success"></i></h3></div>
                    </div>
                    </Fade>
            </div>
                </div>
                </div>
        </div>
    );
};

export default About;