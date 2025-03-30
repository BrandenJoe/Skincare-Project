import React from 'react'

function nav() {
  return (
    <nav className='flex items-center justify-between p-6'>
       <button className='text-600 text-lg font-medium'>skinstric</button>
      <div className='text-gray-700 text-lg font-medium'>
        <a href="#" className='hover:text-gray-900'>[ intro ]</a>
      </div>
       <button  className='text-gray-700 text-lg font-medium'>Enter Code</button>
    </nav>
  )
}

export default nav
