import React from "react";
import { Router } from "../features/Router";

export default function MainBlock() {
  return (
    <Router path="/main">
      <div className="mainblock" to="/main">
        i am a main layout
      </div>
      <div className="mainblock" to="/second">
        i am a second layout
      </div>
    </Router>
  );
}
