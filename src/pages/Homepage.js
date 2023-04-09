import React from 'react'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import UsefulLinks from '../components/UsefulLinks'

export default function Homepage() {
  return (
    <div className="w-full">
      <Hero />
      <Benefits />
      <Banner title="Pay your way with confidence" text="Take control of your finances with flexible payment options on your account." button="View Payment Options" image="/coffee-shop.jpeg" />
      <Cards />
      <Banner title="Log in to view your benefits, rewards, and offers." text="Check out all the benefits in your account that you've enrolled in." button="Log in" image="/log-in-desktop.jpeg"/>
      <UsefulLinks />
    </div>
  )
}
