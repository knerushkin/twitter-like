import React, { Component } from "react";
import style from "./input.scss";

const MASKED_SYMBOL = "*";

class MaskedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  render() {
    return (
      <input
        className={style.input}
        value={MASKED_SYMBOL.repeat(this.state.password.length)}
        onChange={event => this.setState({ password: event.target.value })}
      />
    );
  }
}

export default MaskedInput;
