import React from "react";
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import styles from './App.module.css';

export default function App() {
  return (
    <Router>
      <div className={styles['app-container']}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
