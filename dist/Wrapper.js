import React, { useState, useContext, Fragment, useRef, forwardRef, useEffect } from "react";
import "./Search.css";
var Wrapper = forwardRef(function (props, ref) {
  var isOpen = props.isOpen,
      children = props.children;
  return React.createElement("div", {
    className: "Wrapper ".concat(isOpen ? "collapsed" : "expanded"),
    ref: ref
  }, children);
});
export default Wrapper;