import Banner from "../../components/Banner/Banner";

const Newsletter = () => {
  return (
    <>
      <Banner mainText="newsletter" />
      <section className="newsletter">
        <div className="subscribe-container">
          <h3>subscribe</h3>
          <div className="email-box">
            <input type="email" placeholder="jondoe@gmail.com" />
          </div>
        </div>
        <div className="subscribe-btn">
          <button>send</button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
