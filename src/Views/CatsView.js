import React, { Component } from "react";

import catService from "../CatService";

export default class CatsView extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    console.log("component created... cats still empty:", this.state.cats);
    console.log("get backend data with catService...");
    catService.getFacts().then((data) => {
      console.log(
        "getCat facts!, fill this.state.cats with response/result...",
        data.all
      );
      //   console.log(data.all);
      this.setState({ ...this.state, cats: data.all });
    });
  }

  render() {
    return (
      <div>
        {this.state.cats.map((cat) => (
          <div>
            <h2>{cat.text}</h2>
            {/* {cat.user && cat.user.name && cat.user.name.first ? ( */}
            {/* <h3> */}
            {/* Written by: {cat.user.name.first} {cat.user.name.last} */}
            {/* </h3> */}
            {/* ) : null} */}
          </div>
        ))}
      </div>
    );
  }
}
