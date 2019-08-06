import React, { useState, useContext, Fragment, useRef, useEffect } from "react";
import "./Search.css";

var Wrapper = function Wrapper(props) {
  var container = props.container,
      isOpen = props.isOpen,
      children = props.children;
  return React.createElement(Fragment, null, React.createElement("div", {
    className: "Wrapper ".concat(isOpen ? "collapsed" : "expanded"),
    ref: container
  }, children));
};

export default Wrapper;