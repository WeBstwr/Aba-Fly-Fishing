import Nymph0 from "../../assets/nymph0.png";
import "./flies.css";
import { useNavigate } from "react-router-dom";

const Flies = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/Purchase");
  }
  return (
    <>
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
          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>

          <div className="main-fly-container">
            <div className="fly">
              <div className="fly-img">
                <img src={Nymph0} alt="nymp" />
              </div>
              <div className="fly-text-box">
                <h3>NYMPH</h3>
                <div className="fly-attribute">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <button>add to cart</button>
            </div>
            <button onClick={(event) => handleclick()}>purchase</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flies;
