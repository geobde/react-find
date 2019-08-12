import React, {useState,useContext,Fragment,useRef,useEffect, forwardRef} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const DropDown = forwardRef((props, ref) => {
 const { data, onClick } = props;
 const [savedItems, setSavedItems] = useState([]);

 useEffect(() => {
   localStorage.getItem('latest_search') && setSavedItems( JSON.parse(localStorage.getItem('latest_search') ));
 },[]);

 const handleOnClick = (item) => {
   let tempData = [...savedItems, item];
   savedItems.length < 3 && setSavedItems([...savedItems, item]);
   savedItems.length < 3 && localStorage.setItem('latest_search', JSON.stringify(tempData));
   if(onClick) {
      onClick()
   }
 };

 const SavedItems = () => {
    return (
       <Fragment>
         {savedItems.length > 0 &&
            <Fragment>
               <div className="element header current-location">RECENT SEARCHES</div>
               {savedItems.map(item => <div className="element" onClick={() => handleOnClick(item)} key={item.key}>{item}</div>)}
            </Fragment>
         }
      </Fragment>
    )
 };

 const AllItems = () => {
    return (
       <Fragment>
          <div className=" header element">PLACES</div>
          {data.map(item => <div className="element" onClick={() => handleOnClick(item)} key={item.key}>{item}</div>)}
      </Fragment>
    )
 };

 return (
    <Fragment>
      <div className="DropDown">
          <SavedItems />
          <AllItems />
	  </div>
    </Fragment>
   )
 });

DropDown.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};

DropDown.defaultProps = {
    data: ['Midtown West', 'Liberty Island', 'Financial District', 'Meatpacking District', 'Upper West Side','Flatiron']
};

export default DropDown;