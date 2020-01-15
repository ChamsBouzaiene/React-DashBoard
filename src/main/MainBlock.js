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

export default function MainBlock({ path }) {
  return (
    <Router path={path}>
      <Route to="/main" component={<Main />} />
      <Route to="/second" component={<Second />} />
    </Router>
  );
}
