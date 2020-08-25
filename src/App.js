import React, { Component } from "react";
import "./frans.scss";
export default class App extends Component {
  constructor() {
    super();
    this.state = { menuOpened: false };
  }
  render() {
    return (
      <div
        className={"container " + (this.state.menuOpened ? "menu-opened" : "")}
      >
        <div className="menu">
          {/* <div
            className="hamburger"
            onClick={() =>
              this.setState({ menuOpened: !this.state.menuOpened })
            }
          ></div> */}
          <ul>
            <li>
              <a href="#">Menu 1</a>
              <ul className="submenu">
                <li>Submenu 1</li>
                <li>Submenu 1</li>
                <li>Submenu 1</li>
                <li>Submenu 1</li>
                <li>Submenu 1</li>
              </ul>
            </li>

            <li>
              <a href="#">Menu 2</a>
              <ul className="submenu">
                <li>Submenu 2</li>
              </ul>
            </li>

            <li>
              <a href="#">Menu 3</a>
              <ul className="submenu">
                <li>Submenu 3</li>
              </ul>
            </li>
          </ul>
        </div>
        Frans
      </div>
    );
  }
}
