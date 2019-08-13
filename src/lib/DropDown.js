import React, {useState,useContext,Fragment,useRef,useEffect, forwardRef} from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import "./Search.css";

const DropDown = forwardRef((props, ref) => {
 const { 
    data, 
    onClick, 
    currentLocation,
    apiKey, 
    latestSearch 
 } = props;
 
 const [savedItems, setSavedItems] = useState([]);

 useEffect(() => {
   localStorage.getItem('latest_search') && setSavedItems( JSON.parse(localStorage.getItem('latest_search') ));
 },[]);

 const handleSaveItem = (item) => {
   let tempData = [...savedItems, item];
   savedItems.length < 3 && setSavedItems([...savedItems, item]);
   savedItems.length < 3 && localStorage.setItem('latest_search', JSON.stringify(tempData));
   if(onClick) {
      onClick()
   }
 };

 const handleCurrentLocation = () => {
  return navigator.geolocation.getCurrentPosition(showCurrentPosition);
 };

 const showCurrentPosition = (position) => {
   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`)
   .then(function (response) {
      ref.current.value = response.data.results[0].formatted_address;
   });
 };

 const SavedItems = () => {
    return (
       <Fragment>
         {savedItems.length > 0 &&
            <Fragment>
               <div className="element header current-location">RECENT SEARCHES</div>
               {savedItems.map(item => <div className="element" onClick={() => handleSaveItem(item)} key={item.key}>{item}</div>)}
            </Fragment>
         }
      </Fragment>
    )
 };

 const AllItems = () => {
    return (
       <Fragment>
          <div className=" header element">PLACES</div>
          {data.map(item => <div className="element" onClick={() => handleSaveItem(item)} key={item.key}>{item}</div>)}
      </Fragment>
    )
 };

 const CurrentLocation = () => {
   return (
      <Fragment>
         <div onClick={handleCurrentLocation} className="element header current-location">CURRENT LOCATION</div>
      </Fragment>
    )
 };

 return (
    <Fragment>
      <div className="DropDown">
          {currentLocation && <CurrentLocation />}
          {latestSearch && <SavedItems />}
          <AllItems />
	  </div>
    </Fragment>
   )
 });

DropDown.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  currentLocation:PropTypes.bool,
  latestSearch:PropTypes.bool,
  apiKey:PropTypes.string
};

DropDown.defaultProps = {
    data: ['Midtown West', 'Liberty Island', 'Financial District', 'Meatpacking District', 'Upper West Side','Flatiron'],
    currentLocation:false,
    latestSearch:false,
    
};

export default DropDown;