import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('Register | Toyz Land');
    const [error, setError] = useState(null);
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        // Field data capture
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Form validation
        setError(null);
        if (password.length < 6) {
            setError('Password must be 6 characters or long');
            return;
        }
        if (photo.length == 0) {
            setError('Please give your photo url');
            return;
        }
        
        // Create user 
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                // Logout for image showing issue
                logOut();
                form.reset();
                toast.success('Account created successfully. Please Login Now!');
                navigate('/login');
            })
            .catch(error => {
                setError(error.message ? 'Email already in use!' : null);
            });
    }

    return (
        <div className='bg-pink-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20'>
                <div className='p-10 max-w-[450px] mx-auto bg-white rounded'>
                    <form onSubmit={handleRegister} className=''>
                        <h2 className='text-center font-bold text-3xl text-red-600 uppercase'>Register</h2>
                        {error && <div className="alert alert-error shadow-lg mt-4 mb-2 py-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="John Doe" className="input input-bordered rounded bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="https://i.ibb.co/2sX/profile.png" className="input input-bordered rounded bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="name@example.com" className="input input-bordered rounded bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-900">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="******" className="input input-bordered rounded bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-gray-900 py-3 px-6 rounded text-white font-semibold text-l hover:opacity-80">Register</button>
                        </div>
                    </form>
                    <div className='text-center mt-4'>
                        <small className='mt-2'>Already Have Account? <Link className='text-red-600 underline' to="/login">Login</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;