import "./style.css";
import Services from "./Components/Services/services";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./font";
import Team from "./Components/Team/Team";
import Review from "./Components/Review/Review";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

import Showcase from "./Components/Showcase/Showcase";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <ThemeProvider theme={theme}>
        <Services />
      </ThemeProvider>
      <Showcase />
      <Review />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
