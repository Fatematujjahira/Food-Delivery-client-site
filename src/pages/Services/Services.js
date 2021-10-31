import React from 'react';
import './services.css'
import Bounce from "react-reveal/Bounce";
import { NavLink } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="overflow-hidden">
            
            <div className="bg-img">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <Bounce top>
                {/* <h1 className="mt-5 text-danger header-1 fw-bold">ExperienceFresh & Tasty Food </h1> */}
                <h2 className=" fw-bold header-1 text-danger">Delivering Fresh & And Tasty Foos between 8:AM to 10.00PM</h2>
                </Bounce>
                <Bounce left>
                <h5 className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus perferendis aperiam aliquam voluptate similique autem fugiat repellat illo enim.</h5>
               </Bounce>
              
                  <button type="button" class="btn btn-danger px-5 py-3">Read More...</button>
                  
                    </div>
                    <div className="col-md-6 col-sm-12">

                    </div>
                </div>
                 
                </div>
                            
                    </div>
                
       
    );
};

export default Services;