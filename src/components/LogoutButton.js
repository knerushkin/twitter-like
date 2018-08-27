import React, { Component } from "react";
import style from "./logoutButton.scss"

class LogoutButton extends Component {
  render() {
    return (
        <div className={style["btn"]}>{"Logout"}</div>
    );
  }
}

export default LogoutButton;
