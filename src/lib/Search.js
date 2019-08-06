import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import Input from './Input';
import DropDown from './DropDown';
import Wrapper from './Wrapper';
import "./Search.css";

const Search = (props) => {
 const { type, placeholder, onChange, onClick, data } = props;
 const wrapperRef = useRef(null);
 const [isCollapsed, setCollapse] = useState(true);


 useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setCollapse(true);
    }
  };

  const onFocus = () => {
     setCollapse(false);
  };

  return (
   <Fragment>
     <Wrapper isCollapsed={isCollapsed} wrapperRef={wrapperRef}>
       <Input type={type} placeholder={placeholder} onChange={onChange} onFocus={onFocus} className="Search"/>
       <DropDown data={data} onClick={onClick} />
     </Wrapper>
   </Fragment>
  )
};

export default Search;