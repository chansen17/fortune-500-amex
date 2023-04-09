import { FaCouch, FaCreditCard, FaInfoCircle, FaMobileAlt, FaQuestion, FaUserPlus } from 'react-icons/fa';

export default function UsefulLinks() {
  return (
    <div className="w-full min-h-[40vh] h-full bg-gray-100">
        <div className="max-w-[1300px] mx-auto p-5">
            <h2 className="text-2xl md:text-4xl font-light pt-6 text-gray-700 text-center">Useful Links</h2>
            <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-8">
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaCouch className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">Lounge Finder</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Learn more about the Global Lounge Collection for Platinum card members.</p>
                    </div>
                </div>
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaCreditCard className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">Accept Amex Cards</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Explore the benefits of welcoming American Express Cards.</p>
                    </div>
                </div>
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaUserPlus className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">Refer a Friend</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Invite a friend and earn Membership Rwards points.</p>
                    </div>
                </div>
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaMobileAlt className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">Amex App</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Check out Amex Offers, manage your account safely and securely anytime, anywhere.</p>
                    </div>
                </div>
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaInfoCircle className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">View Benefits FAQ</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Read a selection fo frquently asked questions that may be of interest to you.</p>
                    </div>
                </div>
                <div id="card" className="max-w-2xl w-full mx-auto p-6 flex flex-col md:flex-row bg-gray-50 shadow hover:-translate-y-3 duration-200 hover:shadow-xl hover:shadow-gray-300 cursor-pointer">
                    <div>
                        <FaQuestion className="text-3xl my-2 md:my-0 md:text-4xl text-blue-600 md:mr-4" />
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg pb-2 md:pb-0 font-bold text-blue-600">Help</h2>
                        <p className="text-sm md:text-lg font-extralight texy-gray-700">Get in touch with us. We are always here to help.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
