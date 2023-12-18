
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import FooterNew from "./components/FooterNew";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Pages/Faq";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Certification from "./Pages/Certification";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import ProhibitedCountries from "./Pages/ProhibitedCountries";
import SideMenu from "./components/SideMenu";
import RefundPolicy from "./Pages/RefundPolicy";
import MarketSegments from "./Pages/MarketSegments";
import AffiliationProgram from "./Pages/AffiliationProgram";
import Reels from "./Pages/Reels";
import BecomeAPartner from "./Pages/BecomeAPartner";
import HomePage from "./Pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const toggleLoad = () => {
      console.log("loaded");
      setLoading(false);
    };

    window.addEventListener("load", toggleLoad);

    return () => window.removeEventListener("load", toggleLoad);
  }, []);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])


  return (
    <main>
      <Loader loading={loading} />
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/affiliation-certificates" element={<Certification />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/prohibited-countries" element={<ProhibitedCountries />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/market-segments" element={<MarketSegments />} />
          <Route path="/affiliation-program" element={<AffiliationProgram />} />
          <Route path="/play-reels" element={<Reels />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
        </Routes>
        <FooterNew />
      </BrowserRouter>
    </main>
  );
};

export default App;
