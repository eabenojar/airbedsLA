import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Body/Home";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
