import "./cart.css";
import Banner from "../../components/Banner/Banner";

const Cart = () => {
  return (
    <>
      <section className="cart">
        <div className="cart-bg">
          <h2>my cart</h2>
        </div>
        <Banner mainText="my-items" />
        <div className="cart-items">
          <h3>no items yet</h3>
          {/* <div className="cart-item">
            <div className="cart-item-img">
              image
              <div className="cart-item-text">
                <h3>product name</h3>
                <p>product description</p>
              </div>
            </div>
            <button>$$</button>
          </div> */}
        </div>
        <div className="item-price">
          <button>continue shopping</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
