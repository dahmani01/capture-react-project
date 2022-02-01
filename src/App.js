import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Route, Switch } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/capture-react-project/" exact>
          <AboutUs />
        </Route>
        <Route path="/capture-react-project/work" exact>
          <OurWork />
        </Route>
        <Route path="/capture-react-project/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/capture-react-project/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
