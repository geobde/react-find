import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Wrapper = (props) => {
 const { container, isOpen, children } = props;
 
  return (
    <Fragment>
       <div className={`Wrapper ${isOpen ? "collapsed" : "expanded"}`} ref={container}>
          {children}
	   </div>
       
    </Fragment>
  )
};

Wrapper.propTypes = {
 container: PropTypes.string,
 isOpen: PropTypes.bool,
};

export default Wrapper;