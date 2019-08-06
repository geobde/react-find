import React, { useState, useContext, Fragment, useRef, useEffect } from "react";
import "./Search.css";

var Input = function Input(props) {
  var type = props.type,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onKeyUp = props.onKeyUp;
  return React.createElement(Fragment, null, React.createElement("input", {
    type: type,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: onFocus,
    onKeyUp: onKeyUp,
    className: "Input"
  }));
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'City, Zip, Neighborhood, Address or MLS#'
};
export default Input;