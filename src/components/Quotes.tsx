import { quotesData } from "./";

const Quotes = () => {
  return (
    <section id="quotes" className="quotes">
      {quotesData.map((quote, index) => {
        return (
          <div key={index} className="quote--card">
            <p> {quote.content} </p>
            <div>
              <img src={quote.image} alt={quote.name} />
              <div>
                <h3>{quote.name} </h3>
                <h4>{quote.position} </h4>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Quotes;
