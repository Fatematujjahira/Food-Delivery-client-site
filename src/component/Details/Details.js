import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    useEffect(()=>{
    const url = `https://frightening-goblin-90270.herokuapp.com/singleProduct/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
   },[])

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
       data.product = product;
      
       data.product_name = product?.name;
       data.product_image = product?.image;
       data.product_shortdescribe = product?.discription;
       data.status = "pending"
       console.log(data)
    fetch("https://frightening-goblin-90270.herokuapp.com/addService", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if(result.acknowledged){
            alert('Successfully Added');
           reset()
        }
    })

   } 
    return (
        <div className="details-area bg-dark">
            <h1 className="text-warning banner-title ">this is the details: {product.name}</h1>
            <div className="container mt-5 p-2 ">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                    <CardGroup>
                        <Card className="mb-5">
                            <Card.Img height="400px" variant="top" src={product.img} />
                            <Card.Body>
                            <Card.Title className="border border-1 bg-warning text-light p-2">{product.name}</Card.Title>
                            <Card.Title>{product.price}</Card.Title>
                            <Card.Text>
                               {product.discription}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    </div>
                    <div className="col-sm-12 col-md-5 ">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input  className="m-1 p-2 w-100 " {...register("name", )} placeholder="Name" /> <br />
                    <input className="m-1 p-2 w-100" type="email"{...register("email")} placeholder="email"/> <br /> 
                    <input className="m-1 p-2 w-100" type="number"{...register("number")} placeholder="number"/> <br /> 
                    <input className="m-1 p-2 w-100" type="address"{...register("address")} placeholder="address"/> <br /> 
                    <input className="m-1 px-4 p-2 bg-warning text-light border border-2 "type="submit" />
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;