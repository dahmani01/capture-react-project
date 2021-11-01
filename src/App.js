import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <AboutUs />
    </div>
  );
}

export default App;
