import React from 'react'
import SideBar from './SideBar'

const ImportantTodos = ({ viewMode, searchTerm, showSideBar }) => {
    return (
        <div className='flex h-full text-white gap-x-3'>

            {showSideBar && (
                <div className='relative bg-[#232323] w-1/3 h-[100svh] transition-all duration-300'>
                    <SideBar />
                </div>
            )}

            <div className={`py-5 overflow-y-auto transition-all duration-300 ${showSideBar ? 'w-[85%] pl-[1px]' : 'w-full px-[8rem]'}`}>

                <div className='relative w-full'>
                    hello
                </div>

            </div>
        </div>
    )
}

export default ImportantTodos