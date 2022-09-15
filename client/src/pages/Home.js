import Footer from "../components/Footer";
import Apropos from "../components/home/Apropos";
import Presentation from "../components/home/Presentation";
import Skills from "../components/home/Skills";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <div className="topAccueil">
        <Navigation />

        <Presentation />
      </div>
      <Apropos />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
