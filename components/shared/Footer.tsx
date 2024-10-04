import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 lg:px-20 xl:px-36 py-8">
      <div className="flex items-center justify-between py-10">
          <div className="bg-blue-600 text-sm text-white rounded-full w-24 h-24 flex items-center justify-center text-center">
            <span>Your Logo Here</span>
          </div>

          <h2 className="font-bold text-3xl w-1/2">Your final impact statement goes here. <br />Make it memorable!</h2>
      </div>

      <div className="mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left Side (Logo + Social Links) */}
        <div className="flex flex-col items-start space-y-4">
          <p className="text-md text-gray-500 font-semibold">connect with us</p>
          <ul className="space-y-2 text-md text-gray-600">
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Twitter</a></li>
            <li><a href="#" className="hover:text-black">Facebook</a></li>
            <li><a href="#" className="hover:text-black">LinkedIn</a></li>
          </ul>
        </div>

        {/* Right Side (Locations) */}
        <div className="w-1/2">
          <p className="text-md text-gray-500 font-semibold mb-2">our locations</p>
          <div className="flex space-x-16">
            {[1, 2, 3].map((loc, index) => (
              <div key={index} className="text-md text-gray-600">
                <address>
                  Add your location<br />
                  123 Anywhere St.,<br />
                  Any City, ST 12345
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-semibold text-black mt-14">hello@reallygreatsite.com</p>
    </footer>
  )
}

export default Footer