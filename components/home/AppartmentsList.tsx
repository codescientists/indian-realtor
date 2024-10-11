"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { motion } from "framer-motion"; // Import Framer Motion

const reasons = [
  {
    image: "/appartment-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
  {
    image: "/appartment-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr",
  },
];

// Framer Motion variants for the carousel item animations
const carouselItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: "easeIn" } },
};

const AppartmentsList = () => {
  return (
    <section className="lg:px-20 xl:px-36 py-20 text-center">
      <h2 className="text-xl font-bold mb-4">APARTMENTS, VILLAS AND MORE</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
        in Bangalore
      </p>

      <div className="w-full">
        <Carousel>
          <CarouselContent className="flex">
            {reasons.map((reason, index) => (
              // Wrapping CarouselItem with motion.div for animations
              <motion.div
                key={index}
                className="flex-none w-60 md:w-72 lg:w-80"  // Fixed width per item
                variants={carouselItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
              >
                <CarouselItem className="mr-4"> {/* Add margin between items */}
                  <Card
                    className={cn(
                      "p-0 text-center hover:shadow-xl transition-shadow rounded-lg border-none duration-300 overflow-hidden"
                    )}
                  >
                    <CardContent className="p-0">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="mx-auto h-full w-full"
                      />
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

export default AppartmentsList;
