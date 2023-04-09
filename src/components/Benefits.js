import React from 'react'

const benefits = [
    {
        id: 0,
        title: 'travel',
        text: 'Explore exclusive benefits and rewards to enhance your travel experience.',
        button: 'View Travel Benefits',
        image: '/benefits-lady-on-beach.jpeg'
    },
    {
        id: 0,
        title: 'Amex Offers',
        text: 'Save money and earn points with Amex Offers on shopping, dining, travel, and more.',
        button: 'Check Out Offers',
        image: '/benefits-couple-with-tablet.jpeg'
    },
    {
        id: 0,
        title: 'Entertainment',
        text: 'Enjoy a curated selection of upcoming events and experiences with our premium Cards.',
        button: 'Discover Enterainment',
        image: '/benefits-entertainment.jpeg'
    },
    {
        id: 0,
        title: 'Membership Rewards',
        text: 'Earn points on purchases and redeem them for luxurious travel experience or for daily spending.',
        button: 'Explore Rewards',
        image: '/benefits-man-by-window.jpeg'
    },
    {
        id: 0,
        title: 'Security',
        text: 'Shop confidently with your American Express Cards with the backing of our advanced fraud protection. ',
        button: 'Find Out More',
        image: '/benefits-family.jpeg'
    }
]

export default function Benefits() {
  return (
    <div className="w-full min-h-[50vh] bg-gray-200">
        <div className="max-w-[1300px] mx-auto p-5">
            <div className="py-12">
                <h2 className="text-2xl md:text-3xl font-light">Make the most of every moment</h2>
                <p className="text-md pt-4">Explore all the benefits and savings you can get with an American Express membership.</p>
            </div>
            <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {benefits.map((benefit, i) => (
                <div key={i} id="card" className="w-full max-w-lg mx-auto bg-white shadow">
                    <div className="cursor-pointer">
                        <img src={benefit.image} alt="" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl capitalize pb-5">{benefit.title}</h3>
                        <p>{benefit.text}</p>
                        <button className="my-3 py-3 px-5 rounded bg-blue-700 text-slate-50 w-full truncate">{benefit.button}</button>
                    </div>
                </div>
            ))}
            </section>
        </div>
    </div>
  )
}
