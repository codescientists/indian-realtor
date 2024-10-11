"use client";

import HomeHero from "@/components/home/HomeHero";
import { useEffect, useState } from "react";

// Building names for the welcome screen
const buildingNames = ["The Empire", "Skyline Tower", "Crestview Apartments", "Sunset Villas", "Indian Realtors"];

const Home = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [currentBuilding, setCurrentBuilding] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [curtainAnimation, setCurtainAnimation] = useState(false); // For triggering the curtain effect

  useEffect(() => {
    // Change building names every 0.5 seconds with fade-in/fade-out effect
    const intervalId = setInterval(() => {
      setFadeIn(false); // Start fade-out
      setTimeout(() => {
        setCurrentBuilding((prev) => (prev + 1) % buildingNames.length);
        setFadeIn(true); // Start fade-in after changing text
      }, 250);
    }, 1000);

    // Trigger curtain effect after 4 seconds
    const timeoutId = setTimeout(() => {
      setCurtainAnimation(true); // Start curtain closing animation
      setTimeout(() => {
        setShowWelcomeScreen(false); // Hide welcome screen after curtain closes
        clearInterval(intervalId);
      }, 1000); // Matches the curtain animation duration
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section>
      {showWelcomeScreen ? (
        <div
          className={`absolute left-0 top-0 w-screen h-screen flex items-center justify-center bg-white transition-all duration-1000 ${
            curtainAnimation ? "rounded-b-full h-0" : "h-full"
          }`}
        >
          <h1
            className={`flex items-center justify-center text-4xl font-bold transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {buildingNames[currentBuilding]}
          </h1>
        </div>
      ) : (
        <div className="fade-in transition-opacity duration-1000">
          <HomeHero />
        </div>
      )}
    </section>
  );
};

export default Home;
