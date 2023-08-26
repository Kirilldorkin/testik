import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import ClientAgreement from "./pages/ClientAgreement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import HowToTrade from "./pages/HowToTrade";
import NotFoundError from "./pages/404";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/how-to-trade" element={<HowToTrade />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/client-agreement" element={<ClientAgreement />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
