import {
  Navbar,
  Hero,
  Features,
  Team,
  Quotes,
  SubsForm,
  FooterComp,
  ScrolltoTop,
} from "./components";

function App() {
  return (
    <>
      <ScrolltoTop />
      <header>
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </header>
      <main>
        <div className="container">
          <Features />
          <Team />
          <Quotes />
        </div>
      </main>
      <footer>
        <div className="container">
          <SubsForm />
          <FooterComp />
        </div>
      </footer>
    </>
  );
}

export default App;
