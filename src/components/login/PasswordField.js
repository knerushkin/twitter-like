import React, { Component } from "react";
import MaskedInput from "./MaskedInput";

const isUpperCcase = (str) => {
    return str === str.toUpperCase()  && str !== str.toLowerCase();
}

const isLowerCase = (str) => {
    return str == str.toLowerCase() && str != str.toUpperCase();
}
const lowerCaseValidator = {
    validate: isLowerCase
}

const isCharacter = (str) => {

}

class PasswordField extends Component {
  render() {
    return (
      <div>
        Password: 
        <MaskedInput />
      </div>
    );
  }
}

export default PasswordField;
