import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Populars = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <h2>This is our all products: {products.length}</h2>
            <Row xs={1} md={4} className="g-4">
                {
                    products.map(pd => 
                    <CardGroup>
                        <Card>
                            <Card.Img height="400px" variant="top" src={pd.image} />
                            <Card.Body>
                            <Card.Title>{pd?.name}</Card.Title>
                            <Card.Title>{pd?.price}</Card.Title>
                            <Card.Text>
                               {pd.description}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={`/details/${pd._id}`}><Button className="btn btn-danger ms-5 ">Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </CardGroup>)
                }
            </Row>
        </div>
    );
};

export default Populars;