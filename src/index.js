import React, {useState,useContext,Fragment,useRef,useEffect} from "react";
import { render } from "react-dom";
import { Search } from "./lib";
import "./lib/Search.css";


const App = () => {
  let data = ['Current Location'];


  return (
    <Fragment>
         <Search data={data} />
    </Fragment>
  )
};

render(<App />, document.getElementById("root"));
