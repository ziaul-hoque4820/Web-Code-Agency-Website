import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiArrowRight } from 'react-icons/fi'

function Newsletter() {
    return (
        <div className='section-container text-center'>
            <HeadingSection heading="Stay Update with Our Newsletter" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, numquam quo. Incidunt, itaque accusantium velit molestiae officiis impedit expedita? Aspernatur!" />
            <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-center'>
                <button className='text-white font-semibold flex items-center justify-center gap-3 btn btn-info'>
                    <span>Subscrive Now</span>
                    <FiArrowRight />
                </button>
                <button className='font-semibold btn btn-soft btn-accent border-teal-200'>
                    Lern More
                </button>
            </div>
        </div>
    )
}

export default Newsletter