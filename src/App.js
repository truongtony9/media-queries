import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: false
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide() {
    this.setState({ slide: true });
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span className="Home">Start Bootstrap</span>
          <div className="navlinks">
            <span onClick={this.handleSlide} className="toggleitems">
              MENU &#9776;
            </span>
            <span className="link">SERVICES</span>
            <span className="link">PORTFOLIO</span>
            <span className="link">ABOUT</span>
            <span className="link">TEAM</span>
            <span className="link">CONTACT</span>
          </div>
          <div className={this.state.slide ? "menu slide" : "menu"}>
            <span className="links">SERVICES</span>
            <span className="links">PORTFOLIO</span>
            <span className="links">ABOUT</span>
            <span className="links">TEAM</span>
            <span className="links">CONTACT</span>
          </div>
        </nav>
        <div className="main">
          <div>Welcome To Our Studio!</div>
          <div>IT'S NICE TO MEET YOU</div>
          <div>TELL ME MORE</div>
        </div>
      </div>
    );
  }
}

export default App;
