import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      <div className="rounded overflow-hidden shadow-lg">
        <a href="#"></a>
        <div className="relative">
        <Link to= {`/detail/:id`}>
            <img className="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </Link>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">Phone</div>
          </a>
         
        </div>
        <div className="px-6 py-4">
          <Link to='/detail' className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Top 10 premium Phone in Worldwide</Link>
          <p className="text-gray-500 text-sm">Here provide best premium Phone in Worldwide</p>
        </div>
   
      </div>
      {/* Repeat the same structure for other grid items */}
    </div>
  </div>
  )
}

export default Card