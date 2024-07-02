import mission from "../../assets/mission.png";
import vission from "../../assets/vission.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-banner">
        <h2>about us</h2>
      </div>

      <div className="about-section">
        <div className="about-container">
          <div className="about-img">
            <img src={mission} alt="about image" />
          </div>
          <div className="about-textbox">
            <p>
              At Aba-Fly-Fishing, our mission is to provide fly fishing
              enthusiasts with the finest handcrafted flies. We are committed to
              quality, craftsmanship, and ensuring every angler has the best
              tools for a successful fishing experience.
            </p>
          </div>
        </div>

        <div className="about-container">
          <div className="about-textbox">
            <p>
              Our vision is to become the leading destination for fly fishing
              flies, inspiring a community of passionate anglers. We aim to
              promote sustainable fishing practices and elevate the fly fishing
              experience globally.
            </p>
          </div>
          <div className="about-img">
            <img src={vission} alt="about image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
