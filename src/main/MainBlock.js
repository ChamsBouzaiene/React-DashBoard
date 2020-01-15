import React from "react";
import { Router, Route } from "../features/Router";

const Main = () => {
  return (
    <div className="mainblock" to="/main">
      i am a main layout
    </div>
  );
};

const Second = () => {
  return (
    <div className="mainblock" to="/main">
      i am a second layout
    </div>
  );
};

export default function MainBlock() {
  return (
    <Router>
      <Route to="/" component={<Main />} />
      <Route to="/Hotels" component={<Second />} />
    </Router>
  );
}
