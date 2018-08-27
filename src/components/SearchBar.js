import React, { Component } from "react";
import style from "./search.scss";

import "../icons.svg";

const placeholderText = "Search posts...";

class SearchBar extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className={style["search"]}>
        <input
          placeholder={placeholderText}
          className={style["search__input"]}
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
