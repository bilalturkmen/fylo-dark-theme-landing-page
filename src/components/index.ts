// Import Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Team from "./Team";
import Quotes from "./Quotes";
import SubsForm from "./SubsForm";
import WelcomeMsg from "./WelcomeMsg";
import FooterComp from "./Footer";
import Attribution from "./Attribution";
import ScrolltoTop from "./ScrolltoTop";
import { useSticky } from "../hooks/useSticky";
import Navlinks from "./Navlinks";

// Import Data
import featData from "../data/feature-data.json";
import quotesData from "../data/quotes-data.json";
import { menuLinks } from "../data/menu-data";

//////////////////////////
// Export Components
export { Navbar };
export { Navlinks };
export { Hero };
export { Features };
export { Team };
export { Quotes };
export { SubsForm };
export { WelcomeMsg };
export { FooterComp };
export { Attribution };

//export utils
export { ScrolltoTop };
export { useSticky };

// Export Data
export { featData };
export { quotesData };
export { menuLinks };
