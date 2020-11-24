import React, { useState } from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import styles from './App.module.css';
import Contact from "./Components/Contact";
import MultipleURLChange from "./Components/MultipleURLChange";
import MultipleURLChange2 from "./Components/MultipleURLChange2";
import ThemeContext from './context'

export default function App() {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <div className={styles['app-container']}>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/multiple-1">
              <MultipleURLChange />
            </Route>
            <Route path="/multiple-2">
              <MultipleURLChange2 />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}
