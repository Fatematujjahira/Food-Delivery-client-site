import React from 'react';
import ManageAllOrders from '../../component/ManageAllOrders/ManageAllOrders';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Populars from '../Populer/Populars';
import Recommodation from '../recommodation/Recommodation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Populars></Populars>
             <Services></Services>
            <About></About>
            <Recommodation></Recommodation>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;