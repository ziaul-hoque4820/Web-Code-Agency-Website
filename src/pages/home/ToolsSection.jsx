import React from 'react'
import { FcSettings, FcSmartphoneTablet, FcMindMap } from "react-icons/fc";
import { FaCode } from "react-icons/fa6";
import HeadingSection from '../../components/HeadingSection';


const tools = [
    {
        icon: FcSettings,
        title: "Custonizable Setting",
        description: "Easily configure tools to fit yoyur project requirements"
    },
    {
        icon: FaCode,
        title: "Developer-friendly",
        description: "Optimized for developers with clean and efficient code"
    },
    {
        icon: FcSmartphoneTablet,
        title: "Responsive Design",
        description: "Build tools that look great on any device and screen size"
    },
    {
        icon: FcMindMap,
        title: "Support Team",
        description: "Seamlessly connect with support service for better productivity"
    },
]



function ToolsSection() {
    return (
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            {/* heading section  */}
            {/* <div className='text-center mb-10'>
                <p className='text-blue-600 font-semibold uppercase'>The Tools you need</p>
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-700 mt-3'>All-in-One-solution for your projects</h2>
            </div> */}
            <HeadingSection  subheading="The Tool you need" heading="All-in-One-solution for your projects" />

            {/* tools section  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
                {
                    tools.map((tool, index) => (
                        <div key={index} className='flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer'>
                            <tool.icon className='text-5xl mb-4' />
                            <h3 className='text-lg font-bold text-gray-700'>{tool.title}</h3>
                            <p className='text-gray-400 mt-2'>{tool.description} </p>
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

export default ToolsSection