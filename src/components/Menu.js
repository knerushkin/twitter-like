import React, { Component } from "react";
import LogoutButton from "./LogoutButton";

import style from "./menu.scss";

class Menu extends Component {
  
  render() {
    return (
      <div className={style.menu}>
        <LogoutButton />
      </div>
    );
  }
}

export default Menu;
