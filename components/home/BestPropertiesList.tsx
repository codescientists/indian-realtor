"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { motion } from "framer-motion"; // Import Framer Motion

const properties = [
  {
    image: "/best-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/best-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  // Add more properties here
];

const carouselItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

const BestPropertiesList = () => {
  return (
    <section className="lg:px-20 xl:px-36 py-12 text-center">
      <h2 className="text-xl font-bold mb-4">BEST PROPERTIES AVAILABLE</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
        Choose us for trusted expertise, transparent transactions, and personalized
        property solutions that turn your real estate dreams into reality.
      </p>

      <div className="w-full">
        <Carousel>
          <CarouselContent className="flex">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                className="flex-none w-60 md:w-72 lg:w-80"  // Fixed width per carousel item
                variants={carouselItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05 }} // Hover scaling effect
              >
                <CarouselItem className="mr-4"> {/* Adjust gap between items */}
                  <Card
                    className={cn(
                      "p-4 text-center hover:shadow-xl transition-shadow rounded-lg duration-300"
                    )}
                  >
                    <CardContent className="flex flex-col items-start p-0 text-start">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="mx-auto h-fit w-full"
                      />
                      <h3 className="font-normal text-gray-800 mt-2">{property.title}</h3>
                      <p className="text-start font-light text-xs my-2">{property.description}</p>
                      <p className="font-semibold text-xs text-gray-800">{property.price}</p>
                      <p className="text-xs">Price range</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BestPropertiesList;
