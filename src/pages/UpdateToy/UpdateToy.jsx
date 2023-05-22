import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    useTitle('Update Toy | Toyz Land');
    const [error, setError] = useState(null);
    const toy = useLoaderData();
    const navigate = useNavigate();
    const { _id, photo, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        // Form validation
        setError(null);
        const isValidPrice = /^\d+(\.\d{1,2})?$/.test(price);
        if (!isValidPrice) {
            setError('Please give correct price format!');
            return;
        }
        const isValidRating = /^\d+(\.\d{1,2})?$/.test(rating);
        if (!isValidRating) {
            setError('Please give correct rating format!');
            return;
        }
        const isValidQty = /^\d+(\.\d{1,2})?$/.test(quantity);
        if (!isValidQty) {
            setError('Please give correct quantity format!');
            return;
        }

        const updatedToy = {
            photo, name, sellerName, sellerEmail, subCategory, price: parseFloat(price), rating, quantity, description
        }

        fetch(`https://toyz-land-server.vercel.app/my-toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Toy updated successfully!');
                } else {
                    toast.warn('No modify found!');
                }
                navigate('/my-toys');
            });
    }

    return (
        <div className=''>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <form onSubmit={handleUpdateToy} className='bg-[#e82d761a] p-8 rounded-md'>
                    <h2 className='text-3xl text-center font-bold text-[#e20d19] mb-8 uppercase'>Update Toy</h2>
                    {error && <div className="alert alert-error shadow-lg mt-4 mb-2 py-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>{error}</span>
                        </div>
                    </div>}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Toy Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Toy Name" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Seller Email</span>
                            </label>
                            <input type="text" name="sellerEmail" defaultValue={sellerEmail} placeholder="Seller Email" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Sub Category</span>
                            </label>
                            <input type="text" name="subCategory" defaultValue={subCategory} placeholder="Sub Category" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered rounded-md bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered rounded-md bg-white" required />
                        </div>
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text text-gray-900">Description</span>
                        </label>
                        <textarea className="textarea min-h-[100px] bg-white" defaultValue={description} name="description" required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#222] py-3 px-6 rounded text-white font-semibold text-l hover:opacity-80 w-[150px] uppercase">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;