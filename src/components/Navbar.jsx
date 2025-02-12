import React, { useState } from 'react';
import { FaBars, FaList } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/todo/todoSlice';

const Navbar = ({ toggleViewMode, viewMode, onSearch, toggleSideBar, showSideBar }) => {

  const [showSearch, setShowSearch] = useState(false);

  const theme = useSelector((state) => state.todos.theme);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  }

  const toggleSearch = () => {
    setShowSearch(prevState => !prevState)
  }

  return (
    <div className='bg-[#1f1f1f] flex justify-between items-center px-[5rem] py-4 text-2xl text-white'>

        <div className='flex justify-start items-center gap-6'>
            <div onClick={toggleSideBar} className='cursor-pointer'>
              <FaBars className={`${showSideBar ? 'rotate-90' : ''} transition-all duration-300`}/>
            </div>
            <span className='text-green-600'>DoIt</span>
        </div>

        <div className='flex justify-end items-center gap-6'>
            <div className='flex items-center justify-between gap-6'>
              <div className={`${showSearch ? 'opacity-100' : 'opacity-0'}  transition-all duration-300`}>
                <input type='text' placeholder='Search..' onChange={handleInputChange} className='bg-[#2F3630] px-4 rounded-lg border border-transparent focus:outline-none focus:border-green-600'/>
              </div>
              <FiSearch onClick={toggleSearch} className={`cursor-pointer ${showSearch ? 'text-green-600' : ''}`} />
            </div>
            <div onClick={toggleViewMode} className='cursor-pointer'>
                {viewMode === 'list' ? <IoGridOutline /> : <FaList />}
            </div>
            <div className={`cursor-pointer`}>
              <div onClick={() => dispatch(toggleTheme())}>
                {theme === 'dark' ? <GoMoon /> : <MdOutlineWbSunny />}
              </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar