import React from 'react'
import { Button } from '../ui/button'

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 grid grid-cols-10">
      <div className="col-span-6 w-[70%]">
        <h2 className="text-lg font-bold mb-4">WE ARE READY TO MAKE YOUR <br /> DREAM COME TRUE</h2>
        <p className="text-gray-500 text-xs mb-8">
          Choose us for trusted expertise, transparent
          transactions, and personalized property solutions that
          turn your real estate dreams into reality. se us for
          trusted expertise, transparent transactions, and
          personalized property solutions that turn your real
          estate dreams into reality.
        </p>
        <Button className="px-4 font-semibold bg-blue-500 hover:bg-blue-600 uppercase" type="submit">
            Contact us
        </Button>
      </div>

      <div className="col-span-4">
        <img src="contact.png" alt="Contact Us" className="w-full" />
      </div>

      <div className="col-span-10 font-light text-xs text-center text-gray-500 mt-4">
      Choose us for trusted expertise, transparent transactions, and personalized property solutions that turn your real estate dreams into reality. se us for trusted expertise, transparent transactions, and personalized property solutions that turn your real estate dreams into reality.
      </div>
    </section>
  )
}

export default Contact