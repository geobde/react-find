import React, {useState,useContext,Fragment,useRef, forwardRef, useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Input = forwardRef((props, ref) => {
 const { type, placeholder, onChange, onFocus, onKeyUp, isFocus } = props;


 useEffect(() => {
   !!isFocus && ref.current.focus();
 },[]);
 
  return (
    <Fragment>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        className="Input"
      />
    </Fragment>
  )
});


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
    placeholder: 'Address, Neighborhood, City',
};

export default Input;