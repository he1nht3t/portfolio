import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollup/ScrollUp";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
