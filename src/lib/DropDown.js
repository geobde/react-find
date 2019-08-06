import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const DropDown = (props) => {
 const { data, onClick } = props;
 
  return (
    <Fragment>
      <div className="DropDown">
        {data.map(item => {
		     	return(
            <li onClick={onClick} key={item.key}>{item.dealName}</li>
			     )
		})}
	  </div>
    </Fragment>
  )
};


DropDown.propTypes = {
    data: PropTypes.array,
	onClick: PropTypes.func
};


DropDown.defaultProps = {
    data: []
};

export default DropDown;
