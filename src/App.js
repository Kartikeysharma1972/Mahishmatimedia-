import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyButton } from "@/components/StickyButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Locations from "@/pages/Locations";
import MediaAssets from "@/pages/MediaAssets";
import CaseStudies from "@/pages/CaseStudies";
import Government from "@/pages/Government";
import MediaKit from "@/pages/MediaKit";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import TrainBoard from "@/pages/TrainBoard";
import GroupMediaInventory from "@/pages/GroupMediaInventory";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/media-assets" element={<MediaAssets />} />
          <Route path="/group-media" element={<GroupMediaInventory />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/government" element={<Government />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/train-board" element={<TrainBoard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <StickyButton />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
