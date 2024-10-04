import About from "@/components/home/About";
import AppartmentsList from "@/components/home/AppartmentsList";
import BestPropertiesList from "@/components/home/BestPropertiesList";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import HomeHero from "@/components/home/HomeHero";


const Home = () => {
  return (
    <>
      <HomeHero />
      <About />
      <BestPropertiesList />
      <AppartmentsList />
      <Contact />
      <Features />
    </>
  )
}

export default Home;