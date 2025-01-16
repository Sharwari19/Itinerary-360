import React from 'react'
import {  FaPlane,FaUsersCog, FaChartLine, FaEnvelopeOpenText } from 'react-icons/fa';

const services = [
    {
      icon: <FaUsersCog className='text-4xl text-blue-500'/>, 
      title: "Lead Management",
      description: "Capture, organize, and track customer inquiries effortlessly.",
    },
    {
      icon: <FaPlane className='text-4xl text-blue-500'/>, 
      title: "Booking Integration",
      description: "Seamlessly integrate with flight, hotel, and activity booking platforms.",
    },
    {
      icon: <FaChartLine className='text-4xl text-blue-500'/>, 
      title: "Analytics and Reporting",
      description: "Gain insights into your agency's performance with detailed reports.",
    },
    {
      icon: <FaEnvelopeOpenText className='text-4xl text-blue-500'/>,
      title: "Customer Communication",
      description: "Send automated emails, notifications, and reminders to clients.",
    },
  ];


function Services() {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((service, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                        <div className='mb-4'>{service.icon}</div>
                        <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>
                      
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services;