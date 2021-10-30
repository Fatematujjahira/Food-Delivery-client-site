import React from 'react';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Recommodation from '../recommodation/Recommodation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Recommodation></Recommodation>
            <Contact></Contact>
        </div>
    );
};

export default Home;