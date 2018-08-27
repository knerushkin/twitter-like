import React, { Component } from "react";

import style from "./app.scss";

import Header from "./components/Header";
import Posts from "./components/Posts";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }
}
