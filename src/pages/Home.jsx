import React from 'react'
import PopularDestinations from '../components/PopularDestinations';
import Services from '../components/Services';
import Clients from '../components/Clients';
import HeroCarousel from '../components/HeroCarousel';

function Home() {
  return (
   <>
    <HeroCarousel />
    <PopularDestinations />
    <Services />
    <Clients />
   </>
  )
}

export default Home;