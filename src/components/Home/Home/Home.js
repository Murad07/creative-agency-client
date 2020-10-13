import React from 'react';
import Contact from '../Contact/Contact';
import FeedBacks from '../FeedBacks/FeedBacks/FeedBacks';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Partner from '../Partner/Partner';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partner></Partner>
            <Services></Services>
            <OurWork></OurWork>
            <FeedBacks></FeedBacks>
            <Contact></Contact>
        </div>
    );
};

export default Home;