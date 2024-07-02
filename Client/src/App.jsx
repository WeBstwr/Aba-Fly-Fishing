import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Flies from "./pages/Flies/Flies";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
// import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route exact path="Flies/" element={<Flies />} />
          <Route path="Contact/" element={<Contact />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="Profile/" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;