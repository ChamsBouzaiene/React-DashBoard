import React from "react";
import { Router, Route } from "../features/Router";
import Fligts from "../features/Flights";

const Main = () => {
  return <div className="mainblock">i am a main layout</div>;
};

const Second = () => {
  return <div className="mainblock">i am a second layout</div>;
};

export default function MainBlock() {
  return (
    <div className="mainblock">
      <Router>
        <Route to="/" component={<Fligts />} />
        <Route to="/Hotels" component={<Second />} />
      </Router>
    </div>
  );
}
