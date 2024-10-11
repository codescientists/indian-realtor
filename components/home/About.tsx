"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "/about-1.png", // Replace with actual icon paths
    title: "CERTIFIED REAL AGENCY",
  },
  {
    icon: "/about-2.png", // Replace with actual icon paths
    title: "TRUSTED EXPERTS",
  },
  {
    icon: "/about-3.png", // Replace with actual icon paths
    title: "SECURE PAYMENTS",
  },
  {
    icon: "/about-4.png", // Replace with actual icon paths
    title: "TRUSTED BY THOUSANDS",
  },
];

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="lg:px-20 xl:px-36 py-12 text-center">
      <h2 className="text-xl font-bold mb-4">WHY CHOOSE US?</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
        Choose us for trusted expertise, transparent transactions, and
        personalized property solutions that turn your real estate dreams into
        reality.
      </p>

      {/* Motion container for staggered animations */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // Framer Motion variant for individual card animation
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect with Framer Motion
          >
            <Card
              className={cn(
                "p-0 text-center hover:shadow-xl transition-shadow rounded-3xl duration-300",
                index === 1 && "shadow-md border-2 border-gray-200"
              )}
            >
              <CardContent className="p-0">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="mx-auto my-8 h-48 w-48 object-contain"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
