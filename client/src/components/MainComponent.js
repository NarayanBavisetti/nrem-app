import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
// import "./App.css"

export default function Main() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}
