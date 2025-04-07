import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import bannerImg from "../../assets/banner.png"

function HeroSection() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className='bg-colorBg'>
                <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
                    {/* left side */}
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Creative Web Design For Businesses</h1>
                        <p className='text-lg text-gray-600 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repellendus dolor quis.</p>
                        <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-start'>
                            <button className='text-white font-semibold flex items-center justify-center gap-3 btn btn-info'>
                                <span>Get Started</span>
                                <FiArrowRight />
                            </button>
                            <button className='font-semibold btn btn-soft btn-accent border-teal-200'>
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* right side  */}
                    <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative'>
                        <div className='relative group'>
                            <img src={bannerImg} alt="banner image" className='rounded-lg shadow-lg' />
                            <button onClick={openModal} className='absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0'>
                                <IoPlayCircleOutline className='text-white text-5xl hover:text-green-300' />
                            </button>
                        </div>
                    </div>

                    {/* modal  */}
                    {
                        showModal &&  (
                            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
                                <IoIosCloseCircleOutline onClick={closeModal} className='text-white text-[50px]  cursor-pointer absolute top-0 right-0' />
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/j6Ule7GXaRs?si=zaGu2zcG16cSQ1Hp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default HeroSection