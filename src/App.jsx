import DiscoverNFT from "./components/DiscoverNFT/DiscoverNFT";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopCollections from "./components/TopCollections";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TopCollections />
      <FeaturedCollection />
      <DiscoverNFT />
      <Footer />
    </>
  );
}

export default App;
