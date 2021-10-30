import React from 'react';
import img from '../../assets/banner/img-1 (1).jpg'
import img1 from '../../assets/banner/img13 (1).jpg'
import img2 from '../../assets/banner/img5.jpg'
import img3 from '../../assets/banner/img13 (2).jpg'
import img4 from '../../assets/banner/img-1 (9).jpg'
import img5 from '../../assets/banner/img-1 (7).jpg'
import { Carousel} from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';

import { NavLink } from "react-router-dom";
import './Banner.css';
const Banner = () => {
    return (
        <div className="overflow-hidden">
        <Carousel>
        <Carousel.Item className="slider" interval=  {2000}>
     
    
    <img
      className="d-block w-100 h-100"
      src={img}
      alt="First slide"
    />  

 
      <Carousel.Caption>
              <Bounce left cascade>
              <h3 className="text-warning display-5 fw-bold ">We always put the patients first</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Bounce>
      <div className=" d-flex justify-content-center ">      
               <Bounce>
              <NavLink
                  to="/service"
                  className=" button btn btn-danger fs-5 py-2 px-4"
                >
                  View Details
                </NavLink>
                </Bounce>
                <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read more
                </NavLink>
                </Bounce>
                </div>
       </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item className="slider" interval={2000}>
      
      <img
       className="d-block w-100 h-100"
       src={img1}
       alt="Second slide"
         />
      
         <Carousel.Caption>
         <Bounce left cascade>
                   <h3 className="text-warning display-5 fw-bold">To take care of your health</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Bounce>
           <div className=" d-flex justify-content-center ">      
                     <Bounce>
                     <NavLink
                       to="/service"
                   className=" button btn btn-danger fs-5 py-2 px-4"
                 >
                   View Details
                </NavLink>
                </Bounce>
                <Bounce>
                <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider">
     <Zoom>
     <img
      className="d-block w-100 h-100"
      src={img3}
      alt="Third slide"
      />                
     </Zoom>
       <Carousel.Caption>
       <Bounce left cascade>
       <h3 className="text-warning display-5 fw-bold">First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Bounce>
       <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/service"
                className=" button btn btn-danger fs-5 py-2 px-4">
                 View Details
                 </NavLink>
                 </Bounce>
                 <Bounce>
                 <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider">
      
      <img
      className="d-block w-100 h-100"
      src="https://demo.hasthemes.com/aahar-preview/aahar/images/blog/details/3.jpg"
      alt="Third slide"
      />
      
       <Carousel.Caption>
       <Bounce left cascade>
       <h3 className="text-warning display-5 fw-bold">First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Bounce>
       <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/service"
                className=" button btn btn-danger fs-5 py-2 px-4">
                 View Details
                 </NavLink>
                 </Bounce>
                 <Bounce>
                 <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider">
    
     <img
      className="d-block w-100 h-100"
      src={img4}
      alt="Third slide"
      />
   
       <Carousel.Caption>
       <Bounce left cascade>
       <h3 className="text-warning display-5 fw-bold">First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Bounce>
       <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/service"
                className=" button btn btn-danger fs-5 py-2 px-4">
                 View Details
                 </NavLink>
                 </Bounce>
                 <Bounce>
                 <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider">
       <Zoom >
                    <img
      className="d-block w-100 h-100"
      src={img5}
      alt="Third slide"
      />
     </Zoom>
       <Carousel.Caption>
       <Bounce top cascade>
       <h3 className="text-warning display-5 fw-bold">First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Bounce>
       <div className=" d-flex justify-content-center ">      
                <Bounce>
                <NavLink
                  to="/service"
                className=" button btn btn-danger fs-5 py-2 px-4">
                 View Details
                 </NavLink>
                 </Bounce>
                 <Bounce>
                 <NavLink 
                  to="/about"
                  className=" button btn btn-outline-danger  fs-5 py-2 px-4"
                >
                  Read More
                </NavLink>
                </Bounce>
                </div>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;