import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import { render } from "react-dom";
import { Search } from "./lib";
import "./lib/Search.css";


const App = () => {

  const [data] = useState(["1", "2", "3", "4", "5"]);
  const [results, setResults] = useState(["1", "2", "3", "4", "5"]);

  const handleChange = query => {
    setResults(
      data.filter(item => {
        if (item !== null && item.search(query) !== -1) {
          return true;
        }
        return false;
      })
    );
    return true;
  };



  return (
    <Search data={results}  />
  )
};

render(<App />, document.getElementById("root"));
