import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import Input from './Input';
import DropDown from './DropDown';
import Wrapper from './Wrapper';
import "./Search.css";

const Search = (props) => {
 const { type, placeholder, onChange, onClick, data } = props;
 const container = useRef(null);
 const [isOpen, setOpen] = useState(true);


 useEffect(() => {
    document.addEventListener("mousedown", controlMouse);
    return () => {
      document.removeEventListener("mousedown", controlMouse);
    };
  });

  const controlMouse = event => {
    if (container && !container.current.contains(event.target)) {
      setOpen(true);
    }
  };

  const onFocus = () => {
     setOpen(false);
  };

  return (
   <Fragment>
     <div className="Search">
     <Wrapper isOpen={isOpen} container={container}>
       <Input type={type} placeholder={placeholder} onChange={onChange} onFocus={onFocus} className="Search"/>
       <DropDown data={data} onClick={onClick} />
     </Wrapper>
     </div>
   </Fragment>
     
  )
};

export default Search;