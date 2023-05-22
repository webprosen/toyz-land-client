import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys | Toyz Land');

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('default');

    const url = `https://toyz-land-server.vercel.app/my-toys?email=${user?.email}&sort=${sortOrder}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);

    const handleSortChange = (e) => {
        const selectedSortOrder = e.target.value;
        setSortOrder(selectedSortOrder);
    }

    return (
        <div className=''>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <h2 className="text-3xl text-center font-bold text-red-600 uppercase pb-6">My Added Toys</h2>
                <div className='flex justify-end items-center pb-5'>
                    <div className='font-semibold mr-2'>
                        Sort by Price:
                    </div>
                    <select value={sortOrder} onChange={handleSortChange} className="p-2 border rounded-md bg-white">
                        <option value="default">Default</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div className='overflow-x-auto w-full'>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Photo</th>
                                <th>Product Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Rating</th>
                                <th>Seller Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, index) => <MyToysRow key={toy._id} index={index} toy={toy} toys={toys} setToys={setToys}></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;