import React from "react";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import PortfolioContent from "../components/Portfolio/PortfolioContent";

const Portfolio = () => {
  return (
    <div>
      <div className="topPortfolio">
        <div className="nav">
          <Navigation />
        </div>
      </div>
      <PortfolioContent />
      <Footer />
    </div>
  );
};

export default Portfolio;
