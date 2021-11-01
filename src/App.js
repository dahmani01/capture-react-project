import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
