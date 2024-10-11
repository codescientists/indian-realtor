"use client";

import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="max-w-4xl mx-auto py-20 grid grid-cols-10">
      <motion.div
        className="col-span-6 w-[70%]"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <h2 className="text-lg font-bold mb-4">WE ARE READY TO MAKE YOUR <br /> DREAM COME TRUE</h2>
        <p className="text-gray-500 text-xs mb-8">
          Choose us for trusted expertise, transparent transactions, and personalized property solutions that turn your real estate dreams into reality.
        </p>
        <Button className="px-4 font-semibold bg-blue-500 hover:bg-blue-600 uppercase" type="submit">
            Contact us
        </Button>
      </motion.div>

      <motion.div
        className="col-span-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.2 }} // Delay for the image
      >
        <img src="contact.png" alt="Contact Us" className="w-full" />
      </motion.div>

      <motion.div
        className="col-span-10 font-light text-xs text-center text-gray-500 mt-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.4 }} // Delay for the text
      >
        Choose us for trusted expertise, transparent transactions, and personalized property solutions that turn your real estate dreams into reality.
      </motion.div>
    </section>
  );
}

export default Contact;
