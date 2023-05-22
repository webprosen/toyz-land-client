import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';

const ShopByCategory = () => {
    const [toys1, setToys1] = useState([]);
    const search1 = "Sports Car";
    const url1 = `https://toyz-land-server.vercel.app/category-toys?search=${search1}`;

    useEffect(() => {
        fetch(url1)
            .then(res => res.json())
            .then(data => setToys1(data))
    }, [url1]);


    const [toys2, setToys2] = useState([]);
    const search2 = "Fire Truck";
    const url2 = `https://toyz-land-server.vercel.app/category-toys?search=${search2}`;

    useEffect(() => {
        fetch(url2)
            .then(res => res.json())
            .then(data => setToys2(data))
    }, [url2]);

    const [toys3, setToys3] = useState([]);
    const search3 = "Police Car";
    const url3 = `https://toyz-land-server.vercel.app/category-toys?search=${search3}`;

    useEffect(() => {
        fetch(url3)
            .then(res => res.json())
            .then(data => setToys3(data))
    }, [url3]);

    return (
        <div className='bg-pink-100'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <h2 className="text-3xl text-center font-bold text-red-600 mb-10 uppercase">Shop by Category</h2>
                <Tabs>
                    <TabList>
                        <Tab>
                            <h2 className='p-1'>Sports Car</h2>
                        </Tab>
                        <Tab>
                            <h2 className='p-1'>Fire Truck</h2>
                        </Tab>
                        <Tab>
                            <h2 className='p-1'>Police Car</h2>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4'>
                            {
                                toys1.map(toy => <ToyCard key={toy._id} toy={toy}>{toy.name}</ToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4'>
                            {
                                toys2.map(toy => <ToyCard key={toy._id} toy={toy}>{toy.name}</ToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4'>
                            {
                                toys3.map(toy => <ToyCard key={toy._id} toy={toy}>{toy.name}</ToyCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;