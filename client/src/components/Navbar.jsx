import React, { useEffect, useState } from 'react'

function Navbar({logoutHandler}) {
  const [name,setName]=useState("")
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("user"))
    if(data)
    setName(data.name)
    
  },[])
  return (
    <div className='bg-slate-600 font-bold  flex md:flex-row flex-col px-[15%] items-center py-4 md:py-8 justify-between'>
      <div className='mb-2 md:mb-2'>
        <h1 className='text-3xl text-white'>Dashboard</h1>
      </div>
      <div className='flex gap-x-4 items-center'>
        <h1 className='text-lg font-semibold text-white'>Hi {name}</h1>
        <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={logoutHandler}
          >
           Log Out
          </button>
      </div>
    </div>
  )
}

export default Navbar
