import "./assets/globals.css";
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import Leadership from "./pages/Leadership/Leadership";
// import Tracks from "./pages/Tracks/Tracks";
// import Events from "./pages/Events/Events";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Leadership/" element={<Leadership />} />
          <Route path="Tracks/" element={<Tracks />} />
          <Route path="Events/" element={<Events />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;