import "./cart.css";
import Banner from "../../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../cartStore/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCartStore();

  function handleContinueShopping() {
    navigate("/Flies");
  }

  function handleBuyNow(fly) {
    navigate("/Purchase", {
      state: { fly },
    });
  }

  return (
    <>
      <section className="cart">
        <div className="cart-bg">
          <h2>my cart</h2>
        </div>
        <Banner mainText="my-items" />
        {cart.length === 0 ? (
          <h3>no items yet</h3>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-img">
                  <img src={item.image} alt="fly" />
                  <div className="cart-item-text">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="cart-btns">
                  <button onClick={() => handleBuyNow(item)}>buy now</button>
                  <button onClick={() => removeFromCart(item.name)}>
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="back-to-shopping">
          <button onClick={handleContinueShopping}>continue shopping</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
