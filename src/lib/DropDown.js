import React, {useState,useContext,Fragment,useRef,useEffect, forwardRef} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const DropDown = forwardRef((props, ref) => {
 const { data, onClick, latestSearch } = props;


 const getCurrentLocation = () => {
    return navigator.geolocation && navigator.geolocation.getCurrentPosition(showCurrentPosition);
 };

 const showCurrentPosition = (position) => {
    return ref.current.value = `${position.coords.latitude} - ${position.coords.longitude}` ;
 };

 const handleOnClick = () => {
    if(latestSearch) {
       localStorage.setItem('latest_search', JSON.stringify(['1','2']));
    }
 };


 
  return (
    <Fragment>
      <div className="DropDown">
        <div onClick={getCurrentLocation} className="element current-location">Current Location</div>
        {data.map(item => <div className="element" onClick={handleOnClick} key={item.key}>{item}</div>)}
	  </div>
    </Fragment>
  )
});


DropDown.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  latestSearch: PropTypes.bool
};


DropDown.defaultProps = {
    data: [],
    latestSearch: true
};

export default DropDown;