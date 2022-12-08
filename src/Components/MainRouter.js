import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./HomePages/Header";
import HomePage from "./HomePage";
import Footer from "./HomePages/Footer";
import MoveToTop from "./HomePages/MoveToTop";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Players from "./Players/Players";

const MainRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/players" component={Players} />
    </Switch>
    <Footer />
    <MoveToTop />
  </div>
);

export default MainRouter;
