import React from 'react';
import './services.css'
import Bounce from "react-reveal/Bounce";
import { NavLink } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="bg-dark">
            <div className=" container overflow-hidden title-2  ">
                <h1 className="text-white mt-5 p-4">Safe & easy payment options</h1><hr className="text-secondary w-100"/>
            <Bounce>
            <div className="bg-img">
                <div className="row m-5">
                <div className="col-md-6 col-sm-12">
                   <img src="https://online.csd.gov.pk/app/templates/client/autima/assets/img/delivery-services.gif" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <Bounce top>
                {/* <h1 className="mt-5 text-danger header-1 fw-bold">ExperienceFresh & Tasty Food </h1> */}
                <h2 className=" fw-bold header-1 text-warning">Delivering Fresh & And Tasty Foos between 8:AM to 10.00PM</h2>
                </Bounce>
                <Bounce left>
                <h5 className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus perferendis aperiam aliquam voluptate similique autem fugiat repellat illo enim.</h5>
               </Bounce>
              
                  <button type="button" class="btn btn-danger px-5 py-3">Read More...</button>
                  
                    </div>
                   
                </div>
                 
                </div>
                   </Bounce>         
                    </div>
       </div>
                
       
    );
};

export default Services;