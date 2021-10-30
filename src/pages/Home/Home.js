import React from 'react';
import ManageAllOrders from '../../component/ManageAllOrders/ManageAllOrders';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Populars from '../Populer/Populars';
import Recommodation from '../recommodation/Recommodation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Populars></Populars>
            {/* <ManageAllOrders></ManageAllOrders> */}
            <About></About>
            <Recommodation></Recommodation>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;