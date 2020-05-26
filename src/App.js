import React from "react";
// import "./App.css";
import "./App.sass";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuopen: false,
    };
  }

  handleClick() {
    this.setState({ ...this.state, menuopen: !this.state.menuopen });
    console.log(this.state.menuopen);
  }

  render() {
    return (
      <div className={`container ${this.state.menuopen ? "menuopen" : ""}`}>
        {/* <div className={this.state.menuopen ? "menu open" : "menu"} onClick={() => this.handleClick()} /> */}
        {/* <div className={this.state.menuopen ? "main open" : "main"}> */}
        <div className={`menu ${this.state.menuopen ? "open" : ""} `}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
          </ul>
        </div>

        <div className="hamburger" onClick={() => this.handleClick()}>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default App;
