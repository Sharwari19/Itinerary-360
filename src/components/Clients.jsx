import React from 'react'
import {  FaPlane,FaUsersCog, FaChartLine, FaEnvelopeOpenText } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: '/Images/me2.png',
    text: "Itinerary360 transformed the way we handle leads. Our conversion rates improved by 30%, and we never miss a potential customer anymore!",
    location: 'Los Angeles, USA',
  },
  {
    name: 'Michael Lee',
    image: '/Images/me.png',
    text: "Thanks to the seamless booking integration, we’ve saved countless hours managing flight, hotel, and activity reservations.",
    location: 'London, UK',
  },
  {
    name: 'Priya Sharma',
    image: '/Images/me2.png',
    text: "The analytics and reporting tools are a game-changer. We now have clear insights into our agency's performance!",
    location: 'Mumbai, India',
  },
  {
    name: 'James Anderson',
    image: '/Images/me.png',
    text: "The automated communication features keep our clients happy and informed, and it’s effortless to use.",
    location: 'Sydney, Australia',
  },
];


function Clients() {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h2>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md text-center p-6 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                        <img src={testimonial.image} alt='' className='w-24 h-24 rounded-full mx-auto mb-4'/>
                        <h3 className='text-xl font-bold mb-2'>{testimonial.name}</h3>
                        <p className='text-gray-600'>{testimonial.location}</p>
                        <p className='text-gray-600 italic'>{testimonial.text}</p>      
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients;