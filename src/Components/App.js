import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messeges from "./Messeges";

function App() {
    return (
        <Router>
        <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/messeges">
        <Messeges />
      </Route>
    </Switch>
    </Router>
    );
}
export default App;
