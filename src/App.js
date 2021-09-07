import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
//Import Google Analytics
import ReactGA from "react-ga";
import RouteTracker from "./RouteTracker";

function App() {
  const location = useLocation();
  const TRACKING_ID = "UA-206760172-1";
  ReactGA.initialize(TRACKING_ID);
  return (
    <div className='App'>
      <RouteTracker />
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
