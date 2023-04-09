import { useState } from 'react';
import { FaCcAmex, FaSearch, FaBars, FaTimes, FaUser, FaCreditCard, FaPlane, FaBriefcase } from 'react-icons/fa';
import { GrAmex } from 'react-icons/gr';
import { AiFillBank } from 'react-icons/ai';
import { RiShieldStarLine } from 'react-icons/ri';
import { BsChevronRight } from 'react-icons/bs';

export default function Header() {

  const [toggled, setToggled] = useState(false);
  const handleNavToggle = () => {
    setToggled(!toggled);
  }
  return (
    <>
      <div className="w-full h-50 border-b-2 border-gray-100">
      {/* mobile navbar */}
      <div id="mobileNav" className={toggled ? "w-full min-h-screen top-0 bg-white fixed z-50 left-0 opacity-100 lg:hidden " : " lg:hidden absolute top-[-110%] opacity-0"}>
        <div className="flex justify-between p-5 bg-blue-500">
          <div className="flex items-center">
            <button onClick={handleNavToggle} className="border border-white bg-blue-600 rounded py-2 px-4 md:py-2 md:px-6 flex items-center space-x-2 z-50">
              <FaTimes className="text-xl text-white" />
              <span className="hidden md:block z-20 text-white">Menu</span>
            </button>
            <div>
              <img className="w-auto h-7 ml-6" src="/dls-logo-stack-white.svg" alt="" />
            </div>
          </div>
          <button className="border border-white text-lg py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded">
            Log in
          </button>
        </div>  
        <section className="border-b-2 border-gray-200">
          <div className="mx-2 my-4">
            <input className="w-full border-2 border-gray-2300 rounded-md p-3 text-lg bg-gray-100 outline-blue-400 focus:outline-blue-400 active:outline-blue-400" type="text" placeholder="Search" />
          </div>
        </section>
        <section classname="border-b-2 border-gray-200">
          <div className="mx-2 my-4">
            <ul className="space-y-6">
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><FaUser/></span>
                <span className="text-lg text-blue-600">My Account</span>
              </li>
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><FaCreditCard/></span>
                <span className="text-lg text-blue-600">Cards</span>
              </li>
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><AiFillBank/></span>
                <span className="text-lg text-blue-600">Banking</span>
              </li>
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><FaPlane/></span>
                <span className="text-lg text-blue-600">Travel</span>
              </li>
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><RiShieldStarLine/></span>
                <span className="text-lg text-blue-600">Rewards &amp; Benefits</span>
              </li>
              <li className="p-2 flex items-center space-x-2">
                <span className="text-gray-700 text-xl"><BsChevronRight/></span>
                <span className="text-2xl text-blue-600"><FaBriefcase/></span>
                <span className="text-lg text-blue-600">Business</span>
              </li>
              <li>
                <a className="ml-3 text-lg text-blue-600 hover:underline" href="#">Help</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="border-t-2 border-gray-200">
          <div className="p-5 flex items-center space-x-2">
            <img className="w-auto h-6" src="/dls-flag-us.svg" alt="us flag" />
            <p>United States</p>
          </div>
          <div className="px-5">
            <a href="#" className="text-blue-700">Change Country</a>
          </div>
        </section>
      </div>
      <div className="max-w-[1300px] mx-auto py-2 px-5">
      <nav className="flex items-center justify-between text-blue-500">
        <div className="hidden lg:flex items-center space-x-6">
          <div id="logo" className="flex items-center"> 
            <FaCcAmex className="text-5xl" />
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">My Account</a>
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">Cards</a>
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">Banking</a>
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">Travel</a>
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">Rewards &amp; Benefits</a>
          </div>
          <div>
            <a className="p-2 cursor-pointer font-medium">Business</a>
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleNavToggle} className="bg-blue-600 rounded py-2 px-4 md:py-2 md:px-6 flex items-center space-x-2">
            <FaBars className="text-xl text-white" />
            <span className="hidden md:block z-20 text-white">Menu</span>
          </button>
          <img className="w-full h-16 md:h-20" src="/amex-logo.png" alt="" />
        </div>
        <div className="flex items-center text-lg space-x-8">
          <span className="hidden md:flex items-center space-x-4">
            <a className="p-2 hover:bg-gray-100 rounded" href="#"><FaSearch className="font-light" /></a>
            <a className="p-2 font-medium hover:bg-gray-100 rounded" href="#">Help</a>
          </span>
          <button className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded">
            Log in
          </button>
        </div>
      </nav>
      </div>
    </div>
    <div className="w-full min-h-12 bg-white">
      <div className="max-w-[1300px] mx-auto p-5">
        <div className="flex items-center space-x-4">
          <a className="text-blue-600" href="#">Home</a>
          <span><BsChevronRight/></span>
          <span>Benefits</span>
        </div>
      </div>
    </div>
    </>
  )
}
