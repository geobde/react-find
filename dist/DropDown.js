import React, { useState, useContext, Fragment, useRef, useEffect } from "react";
import "./Search.css";

var DropDown = function DropDown(props) {
  var data = props.data,
      onClick = props.onClick;
  return React.createElement(Fragment, null, React.createElement("div", {
    className: "DropDown"
  }, data.map(function (item) {
    return React.createElement("div", {
      className: "element",
      onClick: onClick,
      key: item.key
    }, item);
  })));
};

DropDown.defaultProps = {
  data: []
};
export default DropDown;