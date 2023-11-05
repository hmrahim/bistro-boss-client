import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from './Banner';
import Category from '../Category/Category';
import PopularItem from './PopularItem';
import Feathured from './Feathured';
import Tesnimonial from './Tesnimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularItem/>
            <Feathured/>
            <Tesnimonial/>
           
        </div>
    );
};

export default Home;