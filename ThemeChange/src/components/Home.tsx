import featuredEyeGlasses from "../data/featuredEyeGlassesData";
import recommendedEyeGlasses from "../data/recommendedEyeGlassesData";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="content">
        <Banner />
        <section className="featured">
          <h2>Featured Products</h2>
          <div className="featured-products">
            {featuredEyeGlasses.map((eyeGlass) => {
              return <Card item={eyeGlass} />;
            })}
          </div>
        </section>
        <section className="recommended">
          <h2>Recommended Products</h2>
          <div className="recommended-products">
            {recommendedEyeGlasses.map((eyeGlass) => {
              return <Card item={eyeGlass} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
