import "./flies.css";
import { useNavigate } from "react-router-dom";
import Fly from "./Fly";
import { FliesData } from "./FliesData";

const Flies = () => {
  const navigate = useNavigate();

  const handleClick = (fly) => {
    navigate("/Purchase", {
      state: { fly },
    });
  };

  return (
    <section className="flies">
      <div className="flies-category">
        <h3>Category</h3>
        <div className="flies-names">
          <p>Nymphs</p>
          <p>Bass Flies</p>
          <p>Hatches</p>
          <p>Dry Flies</p>
          <p>Saltwater Flies</p>
          <p>Salmon</p>
          <p>Lake Flies</p>
          <p>Trout Streamers</p>
        </div>
      </div>
      <div className="flies-container">
        {FliesData.map((currentFly, i) => (
          <Fly
            key={i}
            image={currentFly.image}
            name={currentFly.name}
            description={currentFly.description}
            handleClick={() => handleClick(currentFly)}
          />
        ))}
      </div>
    </section>
  );
};

export default Flies;
