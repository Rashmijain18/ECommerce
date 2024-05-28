import bannerImage from "../assets/banner-girl.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <section className="banner-desc">
        <h1>See everything with Clarity</h1>
        <p>
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes
          covered.
        </p>
        <button className="shop-now-button">Shop Now</button>
      </section>
      <section>
        <img src={bannerImage} className="banner-image"></img>
      </section>
    </div>
  );
};

export default Banner;
