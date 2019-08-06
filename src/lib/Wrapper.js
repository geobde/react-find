import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Wrapper = (props) => {
 const { wrapperRef, isCollapsed, children } = props;
 
  return (
    <Fragment>
       <div className={`Wrapper ${isCollapsed ? "collapsed" : "expanded"}`} ref={wrapperRef}>
          {children}
	   </div>
       
    </Fragment>
  )
};

Wrapper.propTypes = {
 wrapperRef: PropTypes.string,
 isCollapsed: PropTypes.bool,
};

export default Wrapper;