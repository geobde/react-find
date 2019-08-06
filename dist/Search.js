import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useContext, Fragment, useRef, useEffect } from "react";
import Input from './Input';
import DropDown from './DropDown';
import Wrapper from './Wrapper';
import "./Search.css";

var Search = function Search(props) {
  var type = props.type,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onClick = props.onClick,
      data = props.data;
  var container = useRef(null);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    document.addEventListener("mousedown", controlMouse);
    return function () {
      document.removeEventListener("mousedown", controlMouse);
    };
  });

  var controlMouse = function controlMouse(event) {
    if (container && !container.current.contains(event.target)) {
      setOpen(true);
    }
  };

  var onFocus = function onFocus() {
    setOpen(false);
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "Search"
  }, React.createElement(Wrapper, {
    isOpen: isOpen,
    container: container
  }, React.createElement(Input, {
    type: type,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: onFocus,
    className: "Search"
  }), React.createElement(DropDown, {
    data: data,
    onClick: onClick
  }))));
};

export default Search;