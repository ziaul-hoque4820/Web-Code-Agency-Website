import React from 'react'
import HeadingSection from '../../components/HeadingSection'



function Testimonials() {
    return (
        <div className='bg-colorBg'>
            <div className='section-container'>

                <HeadingSection heading="What Our Clients Say" subheading="Testimonials" />

                {/* Testimonials carousel */}
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'> "This platform has revolutionized how projects are managed. Highly recommend." </p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>J</div>
                                <h3 className='text-lg font-bold text-gray-900'>Jhon Deo</h3>
                                <p className='text-sm text-gray-400'>CEO, TechCorp</p>
                            </div>
                        </div>
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo2.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'> "An intuitive and powerful solution that has made collaboration effortless." </p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>Z</div>
                                <h3 className='text-lg font-bold text-gray-900'>Zane Smith</h3>
                                <p className='text-sm text-gray-400'>CTO, InnovateX</p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'> "Exceptional user experience and stellar support team. We love it!" </p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>C</div>
                                <h3 className='text-lg font-bold text-gray-900'>Carlos Vega</h3>
                                <p className='text-sm text-gray-400'>Product Manager, BrightWorks</p>
                            </div>
                        </div>
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo2.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'> "A game changer for our workflow efficiency. We’ve seen real results." </p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>A</div>
                                <h3 className='text-lg font-bold text-gray-900'>Aisha Khan</h3>
                                <p className='text-sm text-gray-400'>Operations Head, Nova Labs</p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'>This platform has revolutionized how projects are managed. Highly recommend.</p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>J</div>
                                <h3 className='text-lg font-bold text-gray-900'>Jhon Deo</h3>
                                <p className='text-sm text-gray-400'>CEO, TechCorp</p>
                            </div>
                        </div>
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo2.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'>An intuitive and powerful solution that has made collaboration effortless.</p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>Z</div>
                                <h3 className='text-lg font-bold text-gray-900'>Zane Smith</h3>
                                <p className='text-sm text-gray-400'>CTO, InnovateX</p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'>This platform has revolutionized how projects are managed. Highly recommend.</p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>J</div>
                                <h3 className='text-lg font-bold text-gray-900'>Jhon Deo</h3>
                                <p className='text-sm text-gray-400'>CEO, TechCorp</p>
                            </div>
                        </div>
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                            <img src="/images/logos/logo2.png" className="size-28 mx-auto my-2 object-contain" />
                            <p className='text-gray-400 italic mb-4 md:w-3/5 mx-auto'>An intuitive and powerful solution that has made collaboration effortless.</p>
                            <div className='flex flex-col items-center space-y-2'>
                                <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold'>Z</div>
                                <h3 className='text-lg font-bold text-gray-900'>Zane Smith</h3>
                                <p className='text-sm text-gray-400'>CTO, InnovateX</p>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials