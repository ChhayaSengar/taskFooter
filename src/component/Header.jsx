import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full border-2 border-red-400'>
        {/* logo */}
        <div className=' w-[90%]  max-auto flex items-center '> 
        <div className='border-2 border-orange-400 '>
             <h1>Chhaya Sengar</h1>
            <img src="" alt="" /></div>

        {/* content */}
        <div className='border-2 border-blue-400 '>
          <div className='border-2  border-yellow-400 '>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header