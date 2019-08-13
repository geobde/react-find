import React, { useState, useContext, Fragment, useRef, forwardRef, useEffect } from "react";
import "./Search.css";
var Input = forwardRef(function (props, ref) {
  var type = props.type,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onKeyUp = props.onKeyUp,
      isFocus = props.isFocus;
  useEffect(function () {
    !!isFocus && ref.current.focus();
  }, []);
  return React.createElement(Fragment, null, React.createElement("input", {
    ref: ref,
    type: type,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: onFocus,
    onKeyUp: onKeyUp,
    className: "Input"
  }));
});
Input.defaultProps = {
  type: 'text',
  isFocus: true,
  placeholder: 'Address, Neighborhood, City'
};
export default Input;