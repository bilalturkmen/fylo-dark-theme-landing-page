import { useState } from "react";
import { WelcomeMsg } from "./";

const SubsForm = () => {
  const [email, setEmail] = useState<string>("");
  const [placeText, setPlaceText] = useState<string>("email@example.com");
  const [error, setError] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validEmail =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );

    if (validEmail || email === "") {
      setError(true);
    } else {
      console.log(email);
      setError(false);
      setStatus(true);
    }
  };

  return (
    <section id="signin" className="subsform">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      {status && <WelcomeMsg email={email} setStatus={setStatus} />}
      {!status && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={placeText}
            onFocus={() => setPlaceText("")}
            onBlur={() => setPlaceText("email@example.com")}
            aria-label="enter your email address"
          />
          <button type="submit">Get Started For Free</button>
          {error && (
            <span className="error" onClick={() => setError(false)}>
              please enter a valid email address.
            </span>
          )}
        </form>
      )}
    </section>
  );
};

export default SubsForm;
