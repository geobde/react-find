import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useContext, Fragment, useRef, useEffect, forwardRef } from "react";
import "./Search.css";
var DropDown = forwardRef(function (props, ref) {
  var data = props.data,
      onClick = props.onClick;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      savedItems = _useState2[0],
      setSavedItems = _useState2[1];

  useEffect(function () {
    localStorage.getItem('latest_search') && setSavedItems(JSON.parse(localStorage.getItem('latest_search')));
  }, []);

  var handleOnClick = function handleOnClick(item) {
    var tempData = [].concat(_toConsumableArray(savedItems), [item]);
    savedItems.length < 3 && setSavedItems([].concat(_toConsumableArray(savedItems), [item]));
    savedItems.length < 3 && localStorage.setItem('latest_search', JSON.stringify(tempData));

    if (onClick) {
      onClick();
    }
  };

  var SavedItems = function SavedItems() {
    return React.createElement(Fragment, null, savedItems.length > 0 && React.createElement(Fragment, null, React.createElement("div", {
      className: "element header current-location"
    }, "RECENT SEARCHES"), savedItems.map(function (item) {
      return React.createElement("div", {
        className: "element",
        onClick: function onClick() {
          return handleOnClick(item);
        },
        key: item.key
      }, item);
    })));
  };

  var AllItems = function AllItems() {
    return React.createElement(Fragment, null, React.createElement("div", {
      className: " header element"
    }, "PLACES"), data.map(function (item) {
      return React.createElement("div", {
        className: "element",
        onClick: function onClick() {
          return handleOnClick(item);
        },
        key: item.key
      }, item);
    }));
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "DropDown"
  }, React.createElement(SavedItems, null), React.createElement(AllItems, null)));
});
DropDown.defaultProps = {
  data: ['Midtown West', 'Liberty Island', 'Financial District', 'Meatpacking District', 'Upper West Side', 'Flatiron']
};
export default DropDown;