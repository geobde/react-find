import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Input = (props) => {
 const { type, placeholder, onChange, onFocus, onKeyUp, isFocus } = props;
 const inputRef = useRef(0);

 useEffect(() => {
   !!isFocus && inputRef.current.focus();
 },[]);
 
  return (
    <Fragment>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        className="Input"
      />
    </Fragment>
  )
};


Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onFocus:  PropTypes.func,
    isFocus: PropTypes.bool
};

Input.defaultProps = {
    type: 'text',
    isFocus: true,
    placeholder: 'City, Zip, Neighborhood, Address or MLS#',
};

export default Input;