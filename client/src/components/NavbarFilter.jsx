import React from 'react'
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
import { useState,useEffect } from 'react';

const NavbarFilter = ({sortFilter,searchhandler}) => {
    
     

  return (
    <div className="bg-slate-600 rounded-lg">
    <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between justify-center mx-auto p-4">
      <div className="flex">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg focus:ring-blue-500 bg-gray-800 "
            placeholder="Search..."
            onKeyUp={(e) => searchhandler(e)}
          />
        </div>
      </div>
     <div className='flex gap-x-4 mt-2 md:mt-0'>
     <div className='flex items-center cursor-pointer' onClick={()=>sortFilter("dec")}>
        <span className='font-bold'>A</span>
        <FaArrowUp />
      </div>
      <div className='flex items-center cursor-pointer' onClick={()=>sortFilter("acc")}>
        <span className='font-bold'>A</span>
        <FaArrowDown />
      </div>
     </div>
    </div>
  </div>
  )
}

export default NavbarFilter
