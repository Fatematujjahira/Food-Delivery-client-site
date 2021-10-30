import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Populers.css';
import Zoom from 'react-reveal/Zoom';

const Populars = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return ( 
        <div className="overflow-hidden pt-5 bg-dark">
            <h1 className="text-light fw-bold text-center py-5">POPULAR <span className="all-clr">FAST FOODS</span></h1>
            <div className="container pt-2">
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(pd => 
                        <Zoom>
             <CardGroup>
                <Card className="work-card bg-dark">
                    <Card.Img className="p-img" src={pd.img} />
                    <Card.Body>
                    <Card.Text className="ps-4">
                        {pd.star}
                    </Card.Text>
                    <Card.Title className="text-warning fw-bold ps-4"><h4>{pd.name}</h4></Card.Title>
                    <Card.Title className="ps-4 text-light">Price: {pd?.discription}</Card.Title>
                    <Card.Text >
                    {/* {pd.details.slice(0,120)} */}
                    </Card.Text>
                    </Card.Body>
                    <Card.Text>
                    <Button className="btn btn-danger ms-2 m mb-5">Add To Cart</Button>
                    <Link to={`/details/${pd._id}`}><Button className="btn btn-primary ms-2 d-btn mb-5">Details</Button></Link>
                    </Card.Text>
                </Card>
            </CardGroup>
            </Zoom>
            )
                }
            </Row>
            </div>
        </div>
    );
};

export default Populars;