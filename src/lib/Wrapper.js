import React, {useState,useContext,Fragment,useRef, forwardRef, useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Wrapper = forwardRef((props, ref) => {
 const {  
   isOpen, 
   children 
 } = props;
 
  return (
       <div className={`Wrapper ${isOpen ? "collapsed" : "expanded"}`} ref={ref}>
          {children}
	    </div>
  )
});

Wrapper.propTypes = {
 container: PropTypes.string,
 isOpen: PropTypes.bool,
};

export default Wrapper;