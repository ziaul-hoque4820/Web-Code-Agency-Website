import React from 'react'
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)


    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Rigister</h2>

                {/* rigistration form */}
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email: </label>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                            type="email" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {errors.email && <p className='text-sm italic my-2 text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Password: </label>
                        <input
                            {...register("password", { required: "password is required", minLength: { value: 6, message: "password must be at least 6 characters" } })}
                            type="password" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {errors.password && <p className='text-sm italic my-2 text-red-500'>{errors.password.message}</p>}
                    </div>
                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>Sign up</button>
                </form>

                {/* social login */}
                <div className='text-center space-y-4'>
                    <p className='text-gray-600'>Or sign-up with</p>

                    <div className='flex flex-col sm:flex-row  justify-center  gap-4'>
                        <button className='flex w-full justify-center items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600'>
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button className='flex w-full justify-center items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900'>
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                        <button className='flex w-full justify-center items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                            <FaFacebook />
                            <span>Facebook</span>
                        </button>
                    </div>
                </div>

                <p className='text-sm text-center text-gray-600'>Have an account? Please <Link to="/login" className='text-blue-600 hover:underline'>Login</Link> </p>
            </div>
        </div>
    )
}

export default Register