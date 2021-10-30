import React from 'react';
import Bounce from "react-reveal/Bounce";
// import Zoom from 'react-reveal/Zoom';

import './Recommodation.css'
const Recommodation = () => {
    return (
        <div className="bg-dark">
         <div className="container ">
               <Bounce bottom>
                <h1 className=" fw-bold text-warning ">SPECIALL DISCOUNT FOR REGULER CUSTOMER</h1>
                </Bounce>
                <div className="row row-cols-1 row-cols-md-2 g-4">
              <Bounce left>
              <div className="col">
              <div className="card bg-image hover-zoom">
              <img className="image-one w-100  " src="https://media.istockphoto.com/photos/            delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=" alt="" />
              <div className="card-body">
              <h5 className="card-title  text-warning">BURGER</h5> <h2 className="discount">Discount: 50%</h2>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional ontent. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
      </Bounce>
      <Bounce right>
         <div className="col">
         <div className="card bg-image hover-zoom">
         <img className="image-one w-100" src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?     auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
         <div className="card-body">
         <h5 className="card-title  text-warning">SANDWICH</h5><h2 className="discount">Discount: 30%</h2>
         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>
      </div>
      </Bounce>
      <Bounce bottom>
      <div className="col">
    <div className="card bg-image hover-zoom">
    <img className="image-one w-100 " src="https://i.pinimg.com/originals/b1/d4/d4/b1d4d4e721007fa632be309a90eebd78.jpg" alt="" />
       <div className="card-body">
        <h5 className="card-title  text-warning">DESSERT</h5><h2 className="discount">Discount: 25%</h2>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
           </div>
           </div>
           </div>
           </Bounce>
           <Bounce bottom>
           <div className="col">
           <div className="card bg-image hover-zoom">
           <img className="image-one w-100 " src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?  auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
           <div className="card-body">
           <h5 className="card-title text-warning">PIZZA</h5><h2 className="discount">Discount: 20%</h2>
           <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
       </div>
       </div>
       </Bounce>
       </div>
       </div>
       
           <div className="container mt-5"> 
           <Bounce left>
            <h1 className="text-warning">Super Pizza Deal</h1><hr className="text-secondary"/>
            </Bounce>
            <Bounce>
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
                    
                    <div className="card bg-image shadow hover-zoom ">
                    <div claasName="col-md-4">
            <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/03-1-1.png" claasName="img-fluid   rounded-start" alt="..."/>
            </div>
            <div claasName="col-md-8 p-2">
            <div claasName="card-body">
            <h3 claasName="card-title">Sicilian Pizza</h3>
            <h4><span className="text-decoration-line-through"> £590.00</span> £590.00</h4>
        </div>
        </div>
                    </div>
                    <div className="card bg-image shadow hover-zoom">
                    <div claasName="col-md-4">
                    <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/06-1-1.png" claasName="img-fluid rounded-start" alt="..."/>
        </div>
           <div claasName="col-md-8 p-3">
            <div claasName="card-body">
            <h3 claasName="card-title text-warning">Hot & Spicy Pizza</h3>
        
            <h4><span className="text-decoration-line-through"> £590.00</span> £590.00</h4>
            </div>
        </div>
            </div>
            <div className="card bg-image shadow hover-zoom">
            <div claasName="col-md-4">
        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/01-1-2.png" claasName="img-fluid   rounded-start" alt="..."/>
        </div>
        <div claasName="col-md-8 p-3">
        <div claasName="card-body">
        <h5 claasName="card-title text-warning">Cauliflower Pizza</h5>
        
        <h4><span className="text-decoration-line-through"> £590.00</span> £590.00</h4>
        </div>
        </div>
        </div>
        </div>
        </Bounce>    



        <Bounce>
                <div className="container mt-5">
                    <h1 className=" text-warning">Super Delicious Deal</h1><hr className="text-secondary"/>
                <div className=" row row-cols-1 row-cols-md-3 mt-5 ">
                    <div className="card bg-image shadow hover-zoom">
                    <div claasName="col-md-4">
           <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/01-1-1.png" claasName="img-fluid      rounded-start" alt="..."/>
           </div>
           <div claasName="col-md-8">
           <div claasName="card-body">
           <h5 claasName="card-title text-warning">Crispy Fry Burger</h5>
           <h4><span className="text-decoration-line-through"> £590.00</span> £590.00</h4>
       </div>
       </div>
                    </div>
                    <div className="card bg-image shadow hover-zoom">
                    <div claasName="col-md-4">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/01-2.png" claasName="img-fluid rounded-start" alt="..."/>
      </div>
      <div claasName="col-md-8">
      <div claasName="card-body">
      <h5 claasName="card-title text-warning">Fandango Burger</h5>
        
      <h4><span className="text-decoration-line-through"> £590.00</span> £590.00</h4>
      </div>
      </div>
                    </div>
                    <div className="card bg-image shadow hover-zoom">
                    <div claasName="col-md-4">
      <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/04/05-2.png" claasName="img-fluid rounded-start" alt="..."/>
      </div>
      <div claasName="col-md-8">
      <div claasName="card-body">
      <h5 claasName="card-title ">Cheddar Cheese Burger</h5>
        
     <h4><span className="text-decoration-line-through "> £590.00</span> £590.00</h4>
      </div>
    </div>
    </div>
        </div>
        </div>
        </Bounce>
        </div>
       
        </div>
        
    );
};

export default Recommodation;