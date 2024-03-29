import { useState } from 'react';
import { Link } from "react-scroll";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiMenuBurger } from "react-icons/ci";
import './App.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header className="sticky z-[1000]  w-[100%] top-0 left-0 right-0 bg-white shadow lg:py-4 lg:px-[6rem] sm-max:px-0 sm-max:py-4 md:p-4">
        <nav className="relative flex items-center justify-between">

          <div className={`sm-max:absolute sm-max:w-[100%]  sm-max:left-0 sm-max:right-0 sm-max:top-[3rem] sm-max:bg-white sm-max:shadow ${showNavbar ? 'block' : 'hidden'} md:flex lg:flex`}>
            <ul className="flex items-center justify-center gap-10  md-max:gap-4 sm-max:flex sm-max:flex-col sm-max:items-start  sm-max:py-4 sm-max:gap-2 sm-max:w-full">
              <Link to="Home" className='hover:text-[#03AEFD] sm-max:hover:bg-[#03AEFD] sm-max:hover:text-white sm-max:w-full sm-max:py-2 sm-max:px-6'>
                <li>Home</li>
              </Link>
              <Link to="About" className='hover:text-[#03AEFD] sm-max:hover:bg-[#03AEFD] sm-max:hover:text-white sm-max:w-full sm-max:py-2 sm-max:px-6'>
                <li>About</li>
              </Link>
              <Link to="Listing" className='hover:text-[#03AEFD] sm-max:hover:bg-[#03AEFD] sm-max:hover:text-white sm-max:w-full sm-max:py-2 sm-max:px-6'>
                <li>Listing</li>
              </Link>
              <Link to="Services" className='hover:text-[#03AEFD] sm-max:hover:bg-[#03AEFD] sm-max:hover:text-white sm-max:w-full sm-max:py-2 sm-max:px-6'>
                <li>Services</li>
              </Link>
              <Link to="Blogs" className='hover:text-[#03AEFD] sm-max:hover:bg-[#03AEFD] sm-max:hover:text-white sm-max:w-full sm-max:py-2 sm-max:px-6'>
                <li>Blogs</li>
              </Link>
            </ul>
              <div className="flex">
              <div className="lg:hidden md:hidden sm-max:flex sm-max:flex-col sm-max:items-center sm-max:justify-center gap-6 sm-max:px-6 sm-max:pb-[2rem]">
                <div className="flex items-center justify-center gap-2 font-Poppins font-[450] hover:text-[#03AEFD]">
                  <HiOutlineUserCircle />
                  <a href="">Login/Register</a>
                </div>
                <div className="btn flex items-center justify-center gap-2 bg-[#03AEFD] px-6 py-2 rounded-full text-white cursor-pointer hover:scale-[1.05]">
                  <img
                    className="w-[16px] h-[16px]"
                    src="./houselogo.png"
                    alt="House Logo"
                  />
                  <a href="">Add Listing</a>
                </div>
              </div>
              </div>

          </div>

          <div className="flex  items-center justify-center gap-3 sm-max:flex sm-max:items-start sm-max:justify-between sm-max:w-full sm-max:px-4">
            <div className="house flex items-center justify-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#03AEFD] rounded-full">
                <img
                  className="w-[16px] h-[16px]"
                  src="./houselogo.png"
                  alt="House Logo"
                />
              </div>
              <p className="font-Poppins font-[600]">Rezilla</p>
            </div>
            <div className="lg:hidden md:hidden sm-max:flex sm-max:items-center sm-max:justify-center sm-max:w-[40px] sm-max:h-[40px] sm-max:bg-[#f5f3f3e2] sm-max:text-[20px] sm-max:rounded-[5px] sm-max:shadow cursor-pointer" onClick={toggleNavbar}>
                <CiMenuBurger />
              </div>
          </div>

          <div className="flex">
            <div className="md-max:gap-4 md:flex items-center justify-center gap-6 sm-max:hidden">
              <div className="flex items-center justify-center gap-2 font-Poppins font-[450]">
                <HiOutlineUserCircle />
                <a href="">Login/Register</a>
              </div>
              <div className="btn flex items-center justify-center gap-2 bg-[#03AEFD] px-6 py-2 rounded-full text-white cursor-pointer">
                <img
                  className="w-[16px] h-[16px]"
                  src="./houselogo.png"
                  alt="House Logo"
                />
                <a href="">Add Listing</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
