import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/Team";
import Features from "./pages/Features";
import MarketPlace from "./pages/MarketPlace";

const RouterPages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="features" element={<Features />} />
          <Route path="marketplace" element={<MarketPlace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterPages;
