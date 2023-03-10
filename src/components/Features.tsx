import { featData } from "./";

const Features = () => {
  return (
    <section id="features" className="features">
      {featData.map((feat, index) => {
        return (
          <div key={index} className="feature--card">
            <div className="card--img">
              <img src={feat.image} alt="" />
            </div>
            <h2> {feat.title} </h2>
            <p>{feat.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
