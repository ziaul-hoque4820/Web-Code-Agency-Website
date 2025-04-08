import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaCalendarAlt, FaCompass, FaTruck } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";


const services = [
    {
        icon: FaCalendarAlt,
        title: "Customizable Setting",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident vitae, possimus reiciendis esse saepe rem sed vero, ullam nostrum ipsum! Ducimus aut laborum neque omnis alias blanditiis et ipsam?"
    },
    {
        icon: FaCompass,
        title: "Developer-Friendly",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident vitae, possimus reiciendis esse saepe rem sed vero, ullam nostrum ipsum! Ducimus aut laborum neque omnis alias blanditiis et ipsam?"
    },
    {
        icon: FiActivity,
        title: "Responsive Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident vitae, possimus reiciendis esse saepe rem sed vero, ullam nostrum ipsum! Ducimus aut laborum neque omnis alias blanditiis et ipsam?"
    },
    {
        icon: FaTruck,
        title: "Cloud Integration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident vitae, possimus reiciendis esse saepe rem sed vero, ullam nostrum ipsum! Ducimus aut laborum neque omnis alias blanditiis et ipsam?"
    },
]




function Services() {
    return (
        <div className='max-w-screen-2xl container bg-white mx-auto py-20 px-5'>
            <HeadingSection heading="Explore Our range of professional services tailored to meet your business needs" subheading="services" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident vitae, possimus reiciendis esse saepe rem sed vero, ullam nostrum ipsum! Ducimus aut laborum neque omnis alias blanditiis et ipsam?" />

            {/* service container  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16'>
                {
                    services.map((service, index) => (
                        <div key={index} className='flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer'>
                            <service.icon className='text-blue-500 text-4xl mb-4' />
                            <p className='text-gray-400 mt-2 md:px-10'>{service.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='text-center'>
                <button className='text-white font-semibold btn btn-info'>
                    Explore More
                </button>
            </div>
        </div>
    )
}

export default Services