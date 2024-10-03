import React from "react";
import Navbar from "./component/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHomePage from "./component/homePage/MainHomePage";
import Footer from "./component/homePage/footer/Footer";
import HomePage from "./component/whoWeArePage/HomePage";
import MainCRIComponent from "./component/whatWeDoPage/CRISection/MainCRIComponent";
import MainGRIPage from "./component/whatWeDoPage/GRISection/MainGRIPage";
import BangladeshMainComponent from "./component/whereWeWork/Bangladesh/BangladeshMainComponent";
import MainPageIndia from "./component/whereWeWork/India/MainPageIndia";
import IndonesiaMainPage from "./component/whereWeWork/Indonesia/IndonesiaMainPage";
import MainPageNepal from "./component/whereWeWork/Nepal/MainPageNepal";
import MainPagePhilippines from "./component/whereWeWork/Philippines/MainPagePhilippines";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MainCRIComponent" element={<MainCRIComponent />} />
        India
        <Route path="/MainGRIPage" element={<MainGRIPage />} />
        <Route path="/Bangladesh" element={<BangladeshMainComponent />} />
        <Route path="/India" element={<MainPageIndia />} />
        <Route path="/Indonesia" element={<IndonesiaMainPage />} />
        <Route path="/Nepal" element={<MainPageNepal />} />
        <Route path="/Philippines" element={<MainPagePhilippines />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
