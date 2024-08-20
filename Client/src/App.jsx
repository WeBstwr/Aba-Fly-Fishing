import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FliesLayout from "./pages/Flies/FliesLayout.jsx";
import Flies from "./pages/Flies/Flies";
import Contact from "./pages/Contact/Contact.jsx";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Purchase from "./pages/Purchase/Purchase.jsx";
import Nymphs from "./pages/Flies/flies/Nymphs.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/Flies" element={<FliesLayout />}>
            <Route index element={<Flies />} />
            <Route path="Nymphs" element={<Nymphs />} />
          </Route>

          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
