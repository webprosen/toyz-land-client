import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
import Newsletter from '../NewsLetter/NewsLetter';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    useTitle('Toyz Land');
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Newsletter></Newsletter>
            <HomeBlogs></HomeBlogs>
        </div>
    );
};

export default Home;