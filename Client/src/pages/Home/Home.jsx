// import "../Home/home.css";
import Hero from "./Hero";
import About from "./About";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Newsletter />
    </section>
  );
};

export default Home;
