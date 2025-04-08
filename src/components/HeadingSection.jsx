import React from 'react'

function HeadingSection({subheading, heading, description}) {
    return (

        <div className='text-center mb-12'>
            <p className='text-blue-600 font-semibold uppercase'>{subheading}</p>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-700 mt-3'>{heading}</h2>
            {
                description && <p className='text-gray-400 mt-4'>{description}</p>
            }
        </div>

    )
}

export default HeadingSection