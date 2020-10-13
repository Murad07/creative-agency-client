import React from 'react';
import FeedBacks from '../FeedBacks/FeedBacks/FeedBacks';
import Header from '../Header/Header';
import Partner from '../Partner/Partner';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partner></Partner>
            <Services></Services>
            <FeedBacks></FeedBacks>
        </div>
    );
};

export default Home;