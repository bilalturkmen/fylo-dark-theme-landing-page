import { Key } from "react";
import { featData } from "./";

const Features = () => {
  return (
    <section id="features" className="features">
      {featData.features.map(
        (
          feat: {
            imageUrl: string;
            title: string;
            description: string;
            width: number;
            height: number;
          },
          index: Key
        ) => (
          <div key={index} className="feature--card">
            <div className="card--img">
              <img
                src={feat.imageUrl}
                alt=""
                width={feat.width}
                height={feat.height}
              />
            </div>
            <h2> {feat.title} </h2>
            <p>{feat.description}</p>
          </div>
        )
      )}
    </section>
  );
};

export default Features;
