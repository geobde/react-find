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
      isFocus = props.isFocus,
      data = props.data,
      currentLocation = props.currentLocation,
      apiKey = props.apiKey,
      latestSearch = props.latestSearch;
  var container = useRef(null);
  var inputRef = useRef(0);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(data),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  useEffect(function () {
    document.addEventListener("mousedown", controlMouse);
    return function () {
      document.removeEventListener("mousedown", controlMouse);
    };
  });
  useEffect(function () {
    onChange && setResults(data);
  }, [data]);

  var controlMouse = function controlMouse(event) {
    if (container && !container.current.contains(event.target)) {
      setOpen(true);
    }
  };

  var handleChange = function handleChange(e) {
    var query = e.target.value;
    onChange ? onChange(query) : innerChange(query);
  };

  var innerChange = function innerChange(query) {
    setResults(filterData(data, query));
  };

  var filterData = function filterData(data, query) {
    return data.filter(function (item) {
      if (item !== null && item.search(query) !== -1) {
        return true;
      }

      return false;
    });
  };

  var onFocus = function onFocus() {
    setOpen(false);
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "Search"
  }, React.createElement(Wrapper, {
    isOpen: isOpen,
    ref: container
  }, React.createElement(Input, {
    ref: inputRef,
    type: type,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    onFocus: onFocus,
    isFocus: isFocus,
    className: "Search"
  }), React.createElement(DropDown, {
    currentLocation: currentLocation,
    apiKey: apiKey,
    latestSearch: latestSearch,
    ref: inputRef,
    data: results,
    onClick: onClick
  }))));
};

export default Search;