import React from 'react'
import SubNav from './SubNav'

export default function Hero() {
  return (
    <>
    <div className="w-full h-[450px] bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute w-full h-full bg-black/50" />
        <div className="max-w-[1300px] h-full mx-auto text-white">
            <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto sm:mx-0 h-full flex flex-col justify-center p-5 space-y-6 z-40">
                <h2 className="z-40 text-3xl md:text-4xl lg:text-5xl font-light ">
                Discover the world of benefits and rewards from American Express.
                </h2>
                <p className="z-40 text-md md:text-lg">Browse membership benefits, rewards, and offers. Find a credit card that works for your lifestyle.</p>
                <button className="w-full md:max-w-[270px] z-40 lg:text-md rounded py-3 px-5 bg-white text-blue-500">Explore Card Benefits</button>
            </div>
        </div>
    </div>
    <SubNav />
    </>
  )
}
