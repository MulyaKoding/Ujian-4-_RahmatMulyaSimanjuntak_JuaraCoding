import React from "react";
import Switch from  "react-bootstrap/esm/Switch";
import { Route, BrowserRouter } from "react-router-dom";
import MenClhoting from "./component/MenClothing";
import HomePage from "./parts/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/men" component={MenClothing} />
      </Switch>
    </BrowserRouter>
  );
};



export default App;
