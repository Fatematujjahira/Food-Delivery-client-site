import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useAuth();

    useEffect(()=>{
        setLoading(true)
        fetch('https://frightening-goblin-90270.herokuapp.com/myOrders')
        .then(res => res.json())
        .then(result => {
           setMyOrders(result)
           setLoading(false)
        })
    },[myOrders])
    return (
        <div className="my-order bg-dark">
            <h1 className="text-center text-white">GET YOUR ORDERS</h1>
            <Row xs={1} md={4} className="g-4">
            {
                myOrders?.filter(item => item?.email === user?.email).map(item => <Order key={item?._id} order={item}></Order>)
            }
            </Row>
        </div>
    );
};

export default MyOrders;