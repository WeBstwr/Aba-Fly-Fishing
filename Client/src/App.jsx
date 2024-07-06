import "./assets/globals.css";
import Header from "./components/Header/Header";
// import Protected from "./components/Protected/Protected.jsx";
import Home from "./pages/Home/Home";
import Flies from "./pages/Flies/Flies";
import Contact from "./pages/Contact/Contact.jsx";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flies" element={<Flies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
