import React from "react";
import { Router, Route } from "../features/Router";
import Fligts from "../features/Flights";
import Hotels from "../features/Hotels";

export default function MainBlock() {
  return (
    <div className="mainblock">
      <Router>
        <Route to="/" component={<Fligts />} />
        <Route to="/Hotels" component={<Hotels />} />
      </Router>
    </div>
  );
}
