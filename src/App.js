import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Post from "./Components/Post";
import Home from "./Views/Home";
import About from "./Views/About";
import Books from "./Views/Books";
import Contact from "./Views/Contact";
import HowItWorks from "./Views/HowItWorks";
import MultiActionAreaCard from "./Components/Header";
//import Cartoonize from "./Components/Cartoonize";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Header />

          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
              <Route path="/how-it-works">
                <HowItWorks />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <div>
            <Post />
          </div>
        </header>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
