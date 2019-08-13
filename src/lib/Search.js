import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import Input from './Input';
import DropDown from './DropDown';
import Wrapper from './Wrapper';
import "./Search.css";

const Search = (props) => {
 const { 
   type, 
   placeholder, 
   onChange, 
   onClick, 
   isFocus, 
   data, 
   currentLocation, 
   apiKey, 
   latestSearch 
 } = props;
 const container = useRef(null);
 const inputRef = useRef(0);
 const [isOpen, setOpen] = useState(true);
 const [results, setResults] = useState(data);


 useEffect(() => {
    document.addEventListener("mousedown", controlMouse);
    return () => {
      document.removeEventListener("mousedown", controlMouse);
    };
  });


  useEffect(() => {
    onChange && setResults(data);
  },[data]);


  const controlMouse = event => {
    if (container && !container.current.contains(event.target)) {
      setOpen(true);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    onChange ? onChange(query) : innerChange(query);
  };

  const innerChange = (query) => {
    setResults(filterData(data, query));
  };


  const filterData = (data, query) => {
    return data.filter(item => {
      if (item !== null && item.search(query) !== -1) {
        return true;
      }
      return false;
    })
  };


  const onFocus = () => {
     setOpen(false);
  };


  return (
   <Fragment>
     <div className="Search">
     <Wrapper isOpen={isOpen} ref={container}>
       <Input ref={inputRef} type={type} placeholder={placeholder} onChange={(e) => handleChange(e)} onFocus={onFocus} isFocus={isFocus} className="Search"/>
       <DropDown currentLocation={currentLocation} apiKey={apiKey} latestSearch={latestSearch} ref={inputRef} data={results} onClick={onClick} />
     </Wrapper>
     </div>
   </Fragment>
     
  )
};

export default Search;