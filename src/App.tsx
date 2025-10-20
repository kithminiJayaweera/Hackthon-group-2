import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import NavItem from "./components/navbar/navItem";
import Career from "./pages/CareerHalloween";

import InnovationSection from "./components/ui/InnovationSection";
import CareerSection from "./pages/pageA/sections/careerSection";

function App() {
  return (
    <>
      <NavItem />
      {/* <Career /> */}
      <NavItem />
      <Hero />
      <InnovationSection />
      <NavItem />
      <CareerSection />
      <Footer />

    </>

  )
}

export default App;
