import "./purchase.css";
import nymph from "../../assets/nymph0.png";

const Purchase = () => {
  return (
    <>
      <section className="purchase">
        <div className="purchase-fly-container">
          <div className="purchase-fly-image">
            <img src={nymph} alt="nymph" />
          </div>
          <div className="purchase-fly-text-box">
            <h3>nymph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <h4>$ 3</h4>
            <div className="add-quantity">
              <button>-</button>
              <button>0</button>
              <button>+</button>
            </div>
            <div className="purchase-buttons">
              <button>buy</button>
              <button>add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
