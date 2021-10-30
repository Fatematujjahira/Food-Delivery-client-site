import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import Fadew from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div>
               <div className="container overflow-hidden">
            
                  
                   <div className="row mt-5">
                   
                    <div className="col-md-6 bg-image hover-zoom">
                    
                       <img className="about w-100" src="https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=" alt="" />
                    
                    </div>
                   
                    <Zoom right>
                    <div className="col-md-6">
                       
                        <h1>BEST FOOD SERVICES</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquid obcaecati numquam eaque minus corrupti tempore harum repellat eos ratione reiciendis officiis iusto amet sunt eum molestiae! Iure, illum ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam officia vel aliquid sequi similique!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam eveniet maxime minima nobis quis dolores iusto eius, officia nemo quam voluptas voluptatibus consequatur ut.</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae!</h5>
                </div>
                </Zoom>
                <div className="mt-5">
                        <h1>our client says</h1>
                        <Bounce> 
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                
                <div className="col">
                 <div className="card h-100 bg-dark bg-image hover-zoom">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TvEjCBG6lzK_o5hGVFEdlo0GOj9vF2_o0Q&usqp=CAU" className="card-img-top" alt="..."/>
                 <div className="card-body">
                 <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
                        <i className="fa fa-star"></i>

		</span>

        <h6 className="text-info">Regina Miles</h6>
	    <h6 className="text-white">Web Developer</h6>
      </div>
      <div className="card-footer">
       
      </div>
      </div>
      </div>
    
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiTCStLMnAqueJZVjbt3ObO72anODdVWzWw&usqp=CAU" className="card-img-top " alt="..."/>
      <div className="card-body">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
			         <i className="fas fa-star"></i>
                     <i className="fa fa-star"></i>

	 </span>

      <h6 className="text-info">Regina Miles</h6>
	  <h6 className="text-white">Web Developer</h6>
      </div>
      
      </div>
      </div>
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4nGHEqm-u2clqinStzDtzgJB4D7QCsg3Ag&usqp=CAU" className="card-img-top" alt="..."/>
      <div className="card-body">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
                    <i className="fa fa-star"></i>

		</span>
        <h6 className="text-info">Regina Miles</h6>
		<h6 className="text-white">Web Developer</h6>
      </div>
     
      </div>
      </div>
      <div className="col">
      <div className="card h-100 bg-dark bg-image hover-zoom">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4FLQPK-VqE1Lid59nC6YtX3kz0YvRwXzgQ&usqp=CAU" className="card-img-top" alt="..."/>
      <div className="card-body">
      <span className="d-flex justify-content-center my-3 star-icons-color text-warning">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
                    <i className="fa fa-star"></i>

		</span>
        <h6 className="text-info">Regina Miles</h6>
		<h6 className="text-white">Web Developer</h6>
      </div>
     
      </div>
     </div>
                      
      </div>
      </Bounce> 
      </div>
      <div className="">
      <h1 className="fw-bold display-5 mt-5 text-warning">Latest Tips And Tricks</h1>
      <Zoom>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div className="col">
    <div className="card h-100 bg-image hover-zoom">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/pexels-abhinav-goswami-291528-440x250.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Amazing Decadent Pecan PIE Best Cake</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 bg-image hover-zoom">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-3-440x250.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Black Special Hot Suchi With Salad Serving</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 bg-image hover-zoom">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-2-1-440x250.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Vegetable & Chicken Wrap For Lunch</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</Zoom> 
       </div>
      <div className="">
      <h3>TEAM MEMBERS</h3>
      <h1 className="fw-bold display-5 mt-5 text-warning">Meet Our Best Team</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
    <div className="col">
    <div className="card h-100 bg-image hover-zoom">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/team1.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Alizeh Anderson
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
        <h5 className="card-title">Angelina John Doe
        </h5>
        <p className="card-text">Master Chef</p>
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
        <h5 className="card-title">Vegetable & Chicken Wrap For Lunch</h5>
        <p className="card-text">Psychologist</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
       </div>
      </div>
            
       
            <div className="mt-5">
                <h1 className="display-2 fw-bold">FAQ</h1>
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
                    <div className="col-md-8 col-sm-12 mt-5">
                      <div className="information rounded-pill p-3 m-3"><h3>Is it possible to pay by credit card?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>Can I return the product after purchase?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>How do I use a promotional code?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>What if the prepaid goods are not delivered?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>Is it possible to pay by credit card?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>Where and how can I exchange or refund?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>Where and how can I exchange or refund?</h3></div>
                      <div className="information rounded-pill p-3 m-3"><h3>And more options...</h3></div>
                    </div>
            </div>
                </div>
                </div>
        </div>
    );
};

export default About;