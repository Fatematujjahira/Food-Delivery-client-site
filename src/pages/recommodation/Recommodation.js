import React from 'react';
// import burger from '../../assets/banner'
import './Recommodation.css'
const Recommodation = () => {
    return (
        <div>
            <div className="container">
                <h1 className="mt-5 fw-bold ">OUR RECOMMENDATION</h1>
                <div className=" recommodation">
                <div className="row mt-5">
                    <div className="col-md-6">
                            <img className="image-one w-100 single-div" src="https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=" alt="" />
                            <h1 className="display-5">BURGER</h1>
                    </div>
                    <div className="col-md-6">
                            <img className="image-one w-100 single-div" src="https://i.pinimg.com/originals/b1/d4/d4/b1d4d4e721007fa632be309a90eebd78.jpg" alt="" />
                           <h1 className="display-5">DESSERT</h1> 
                    </div>
                </div>
                <div className="row mt-4">
                    <div className=" col-md-6">
                            <img className="image-one w-100 single-div" src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h1 className="display-5">PIZZA</h1>
                    </div>
                    <div className="col-md-6">
                            <img className="image-one w-100 single-div" src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                           <h1 className="display-5">SANDWICH</h1>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Recommodation;