import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import { render } from "react-dom";
import { Search } from "./lib";
import "./lib/Search.css";


const App = () => {
  return (
    <Fragment>
         <Search />
    </Fragment>
  )
};

render(<App />, document.getElementById("root"));
