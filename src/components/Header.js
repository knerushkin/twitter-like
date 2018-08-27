import React, { Component } from "react";
import style from "./header.scss";

import SearchBar from "./SearchBar";
import Menu from "./Menu";

class Header extends Component {
  
  render() {
    return (
      <div className={style["header"]}>
        <Menu />
        <SearchBar />
      </div>
    );
  }
}

export default Header;
