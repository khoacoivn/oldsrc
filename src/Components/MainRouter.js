import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./HomePages/Header";
import HomePage from "./HomePage";
import Footer from "./HomePages/Footer";
import MoveToTop from "./HomePages/MoveToTop";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Players from "./Players/Players";
import PlayerDetail from "./PlayerDetail/PlayerDetail";
import AllGames from "./AllGames/AllGames";
import AboutUs from "./AboutUs/AboutUs";
import ContactForm from "./ContactForm/ContactForm";
import CaroGame from "./GameCaro/CaroGame";

const MainRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/players" component={Players} />
      <Route path="/playerDetail" component={PlayerDetail} />
      <Route path="/allGames" component={AllGames} />
      <Route path="/aboutUS" component={AboutUs} />
      <Route path="/contactForm" component={ContactForm} />
      <Route path="/caroGame" component={CaroGame} />
    </Switch>
    <Footer />
    <MoveToTop />
  </div>
);

export default MainRouter;
