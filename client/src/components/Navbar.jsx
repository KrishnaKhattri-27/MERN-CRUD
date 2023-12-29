import React, { useEffect, useState } from 'react'

function Navbar({logoutHandler}) {
  const [name,setName]=useState("")
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("user"))
    if(data)
    setName(data.name)
    
  },[])
  return (
    <div className='bg-white font-bold  flex px-[15%] items-center py-8 justify-between'>
      <div>
        <h1 className='text-3xl'>Dashboard</h1>
      </div>
      <div className='flex gap-x-4 items-center'>
        <h1 className='text-lg font-semibold'>Hi {name}</h1>
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={logoutHandler}
          >
           Log Out
          </button>
      </div>
    </div>
  )
}

export default Navbar
