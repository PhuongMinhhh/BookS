import React from 'react'
import {Link} from 'react-router-dom'
const NFooter = () => {
  return (

        <footer className="bg-teal-300 flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 uppercase">

          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                License
              </Link>
            </li>
            <li>
              <Link to="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                Contribute
              </Link>
            </li>
            <li>
              <Link to="#" className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
  </footer> 

  )
}

export default NFooter
