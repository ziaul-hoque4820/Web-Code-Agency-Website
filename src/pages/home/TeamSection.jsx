import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router';

const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];


function TeamSection() {
  return (
    <div className='bg-colorBg'>
        <div className='section-container'>
            <HeadingSection heading="Meet The Experts" subheading="Our Team" />

            {/* team member cards */}
            <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    teamMembers.map((member, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                            <img src={member.image} alt={member.name} className='w-full h-56 object-cover' />
                            <div className='p-5'>
                                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                                <p className='text-sm text-gray-400 mb-4'>{member.role}</p>
                                <div className='flex space-x-4 mb-5 items-center'>
                                    <Link to={member.linkedIn}> <FaLinkedinIn className='text-blue-600 hover:text-blue-800' /> </Link>
                                    <Link to={member.twitter}> <FaTwitter className='text-blue-400 hover:text-blue-500' /> </Link>
                                    <Link to={member.instagram}> <FaInstagram className='text-red-500 hover:text-red-600' /> </Link>
                                    <Link to={member.facebook}> <FaFacebookF className='text-blue-500 hover:text-blue-700' /> </Link>
                                </div>
                                <button className='text-white font-semibold btn btn-info'>Contact {member.name.split(" ")[0]}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default TeamSection