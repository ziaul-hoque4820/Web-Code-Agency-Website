import React from 'react'
import { FaGoogle, FaGithubSquare, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router';

function Register() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Please Rigister</h2>

            {/* rigistration form */}
            <form action="" className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email: </label>
                    <input type="email" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                </div>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Password: </label>
                    <input type="password" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                </div>
                <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>Sign up</button>
            </form>

            {/* social login */}
            <div className='text-center space-y-4'>
                <p className='text-gray-600'>Or sign-up-with</p>
                <div className='flex justify-center space-x-4'>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600'>
                        <FaGoogle className='text-2xl' />
                        <span>Google</span>
                    </button>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900'>
                        <FaGithubSquare className='text-2xl' />
                        <span>GitHub</span>
                    </button>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        <FaFacebook className='text-2xl' />
                        <span>Facebook</span>
                    </button>
                </div>
            </div>

            <p className='text-[17px] text-center text-gray-600'>Have an account? Please <Link to="/login" className='text-blue-600 hover:underline'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register