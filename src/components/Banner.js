import React from 'react'

export default function Banner({title, text, button, image}) {
  return (
    <div className="w-full h-[450px] relative">
        <img className="absolute w-full h-full object-cover" src={image} alt=".." />
        <div className="absolute h-full w-full bg-black/50" />
        <div className="max-w-[1300px] mx-auto h-full">
            <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto md:mx-0 h-full flex flex-col justify-center p-5 space-y-6 text-white">
                <h2 className="z-20 text-5xl font-extralight">{title}</h2>
                <p className="z-20 text-lg">{text}</p>
                <button className="w-full md:max-w-[270px] z-40 lg:text-md rounded py-3 px-5 bg-white text-blue-500">{button}</button>
            </div>
        </div>
    </div>
  )
}
