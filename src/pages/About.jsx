import React from 'react'

function About() {
  return (
    <div className='bg-gray-100'>
            <div className='relative h-screen bg-cover bg-center h-96' 
                style={{ backgroundImage: "url('/Images/travel.jpeg')"}}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>About</h4>       
                </div>    
            </div>  

            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex items-center justify-center'>
                        <img 
                            src='/Images/world-map.jpg'
                            alt='About Us'
                            className='rounded-lg shadow-md w-full h-auto'
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-2xl font-bold mb-4'>Who We Are</h3>
                        <p className='text-gray-700 mb-4'>At Itinerary360, we empower travel agencies with smart, 
                            user-friendly tools to streamline operations and enhance customer experiences. Our all-in-one 
                            CRM is built to manage leads, bookings, communication, and analytics seamlessly.
                        </p>

                        <h3 className='text-2xl font-bold mb-4'>Our Mission</h3>
                        <p className='text-gray-700 mb-4'>Our mission is to simplify travel operations and help agencies grow 
                            by delivering innovative solutions that enable smarter workflows and 
                            unforgettable client journeys.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About;