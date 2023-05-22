import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    useTitle('All Toys | Toyz Land');
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const url = 'https://toyz-land-server.vercel.app/all-toys';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=''>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:pb-20 md:pt-15'>
                <h2 className="text-3xl text-center font-bold text-red-600 uppercase pb-6">All seller toys</h2>
                <div className='flex justify-start my-4 ml-1'>
                    <input
                        type='text'
                        placeholder='Search by toy name'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='px-4 py-2 border rounded-md bg-white'
                    />
                </div>
                <div className='overflow-x-auto w-full bg-white'>
                    <table className='table w-full'>
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Photo</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredToys.map((toy, index) => (
                                    <AllToysRow key={toy._id} index={index} toy={toy} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;
