import React from 'react'

export default function Footer() {
  return (
    <div className="w-full min-h-[50vh] h-full bg-white">
        <div className="max-w-[1300px] mx-auto p-5">
            <section className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 space-x-30 border-b-2 border-gray-200 pb-6">
                <div>
                    <ul className="space-y-4">
                        <li className="text-sm md:text-md font-bold text-gray-600 uppercase">about</li>
                        <li className="text-md md:text-lg text-blue-700">About American Express</li>
                        <li className="text-md md:text-lg text-blue-700">Investor Relations</li>
                        <li className="text-md md:text-lg text-blue-700">Careers</li>
                        <li className="text-md md:text-lg text-blue-700">Global Network</li>
                        <li className="text-md md:text-lg text-blue-700">Contact Us</li>
                        <li className="text-md md:text-lg text-blue-700">Amex Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li className="text-sm md:text-md font-bold text-gray-600 uppercase">Products &amp; Services</li>
                        <li className="text-md md:text-lg text-blue-700">About American Express</li>
                        <li className="text-md md:text-lg text-blue-700">Investor Relations</li>
                        <li className="text-md md:text-lg text-blue-700">Careers</li>
                        <li className="text-md md:text-lg text-blue-700">Global Network</li>
                        <li className="text-md md:text-lg text-blue-700">Contact Us</li>
                        <li className="text-md md:text-lg text-blue-700">Amex Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li className="text-sm md:text-md font-bold text-gray-600 uppercase">Links You May Like</li>
                        <li className="text-md md:text-lg text-blue-700">About American Express</li>
                        <li className="text-md md:text-lg text-blue-700">Investor Relations</li>
                        <li className="text-md md:text-lg text-blue-700">Careers</li>
                        <li className="text-md md:text-lg text-blue-700">Global Network</li>
                        <li className="text-md md:text-lg text-blue-700">Contact Us</li>
                        <li className="text-md md:text-lg text-blue-700">Amex Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li className="text-sm md:text-md font-bold text-gray-600 uppercase">Additional Information</li>
                        <li className="text-md md:text-lg text-blue-700">About American Express</li>
                        <li className="text-md md:text-lg text-blue-700">Investor Relations</li>
                        <li className="text-md md:text-lg text-blue-700">Careers</li>
                        <li className="text-md md:text-lg text-blue-700">Global Network</li>
                        <li className="text-md md:text-lg text-blue-700">Contact Us</li>
                        <li className="text-md md:text-lg text-blue-700">Amex Mobile App</li>
                    </ul>
                </div>
            </section>
            <section className="pt-6">
                <div className="flex flex-col md:flex-row items-start justify-between w-full">
                    <img className="w-auto h-20" src="/amex-logo.png" alt="amex logo"/>
                    <div className="flex items-center space-x-2">
                        <img className="w-auto h-6" src="/dls-flag-us.svg" alt="us flag" />
                        <span>
                            United States
                            <a href="#" className="pl-2 text-blue-500 hover:underline">Change Country</a>
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-3 pt-6">
                    <span><img className="w-auto h-6 md:h-9" src="/fb.png" alt="" /></span>
                    <span><img className="w-auto h-6 md:h-9" src="/twitter.png" alt="" /></span>
                    <span><img className="w-auto h-6 md:h-9" src="/instagram.png" alt="" /></span>
                    <span><img className="w-auto h-6 md:h-9" src="/linked-in.png" alt="" /></span>
                    <span><img className="w-auto h-6 md:h-9" src="/youtube.png" alt="" /></span>
                </div>
                <div className="flex flex-wrap md:flex-row items-center space-x-4 md:divide-x-2 text-blue-700 pt-6">
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Terms of Service</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Privacy Center</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Ad Choices</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Security Center</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Card Agreements</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Service Members Benefits</a>
                    <a className="text-sm md:text-md lg:text-lg md:pl-2 hover:underline" href="#">Site Map</a>
                </div>
                <div className="flex flex-wrap pt-6 space-y-2 pb-12">
                    <p className="text-sm md:text-md lg:text-lg">All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service. Please review. </p>
                    <p className="text-sm md:text-md lg:text-lg"> © 2022 American Express. All rights reserved </p>
                </div>
            </section>
        </div>
    </div>
  )
}
