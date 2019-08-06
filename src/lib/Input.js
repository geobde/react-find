import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import PropTypes from 'prop-types'
import "./Search.css";

const Input = (props) => {
 const { type, placeholder, onChange, onFocus, onKeyUp } = props;
 
  return (
    <Fragment>
      <input
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
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'City, Zip, Neighborhood, Address or MLS#',
};

export default Input;