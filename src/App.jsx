import DiscoverNFT from "./components/DiscoverNFT/DiscoverNFT";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SellNFT from "./components/SellNFT";
import TopCollections from "./components/TopCollections";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TopCollections />
      <FeaturedCollection />
      <SellNFT />
      <DiscoverNFT />
      <Footer />
    </>
  );
}

export default App;
