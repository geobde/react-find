import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useContext, Fragment, useRef, useEffect, forwardRef } from "react";
import axios from 'axios';
import "./Search.css";
var DropDown = forwardRef(function (props, ref) {
  var data = props.data,
      onClick = props.onClick,
      currentLocation = props.currentLocation,
      apiKey = props.apiKey,
      latestSearch = props.latestSearch;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      savedItems = _useState2[0],
      setSavedItems = _useState2[1];

  useEffect(function () {
    localStorage.getItem('latest_search') && setSavedItems(JSON.parse(localStorage.getItem('latest_search')));
  }, []);

  var handleSaveItem = function handleSaveItem(item) {
    var tempData = [].concat(_toConsumableArray(savedItems), [item]);
    savedItems.length < 3 && setSavedItems([].concat(_toConsumableArray(savedItems), [item]));
    savedItems.length < 3 && localStorage.setItem('latest_search', JSON.stringify(tempData));

    if (onClick) {
      onClick();
    }
  };

  var handleCurrentLocation = function handleCurrentLocation() {
    return navigator.geolocation.getCurrentPosition(showCurrentPosition);
  };

  var showCurrentPosition = function showCurrentPosition(position) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(position.coords.latitude, ",").concat(position.coords.longitude, "&key=").concat(apiKey)).then(function (response) {
      ref.current.value = response.data.results[0].formatted_address;
    });
  };

  var SavedItems = function SavedItems() {
    return React.createElement(Fragment, null, savedItems.length > 0 && React.createElement(Fragment, null, React.createElement("div", {
      className: "element header current-location"
    }, "RECENT SEARCHES"), savedItems.map(function (item) {
      return React.createElement("div", {
        className: "element",
        onClick: function onClick() {
          return handleSaveItem(item);
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
          return handleSaveItem(item);
        },
        key: item.key
      }, item);
    }));
  };

  var CurrentLocation = function CurrentLocation() {
    return React.createElement(Fragment, null, React.createElement("div", {
      onClick: handleCurrentLocation,
      className: "element header current-location"
    }, "CURRENT LOCATION"));
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "DropDown"
  }, currentLocation && React.createElement(CurrentLocation, null), latestSearch && React.createElement(SavedItems, null), React.createElement(AllItems, null)));
});
DropDown.defaultProps = {
  data: ['Midtown West', 'Liberty Island', 'Financial District', 'Meatpacking District', 'Upper West Side', 'Flatiron'],
  currentLocation: false,
  latestSearch: false
};
export default DropDown;