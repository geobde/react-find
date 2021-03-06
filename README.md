Elegant, accessible search component for React with recent searches & current location functionality.

![Alt text](https://github.com/geobde/react-find/blob/master/animation.gif "Search")

## Installation

```
npm i react-find --save
```

## Usage

```
import React from "react";
import { Search } from "react-find";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const data = [
    "Midtown West",
    "Liberty Island",
    "Financial District",
    "Meatpacking District",
    "Upper West Side",
    "Flatiron"
  ];

  return (
    <div className="App">
      <Search 
       data={data}
       currentLocation={true} 
       latestSearch={true} 
       apiKey={API_KEY} 
     />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
[![Edit react-find](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-find-bwhnw?fontsize=14)

## API

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `placeholder`     | _string_   |  The placeholder text for the input box. |
| `data`            | _array_    |  An array of data which acts as the source of data for the dropdown. This prop is required. |
| `onChange`        | _function_ |  A function which acts as a callback when the input value is changed. |
| `onClick`         | _function_ |  A function which acts as a callback when the dropdown element is clicked. |
| `currentLocation` | _boolean_  |   A boolean value which indicates if current location functionality is enabled. |
| `latestSearch`    | _boolean_  |   A boolean value which indicates if latest search  functionality is enabled. |
| `apiKey`          | _string_   |   If currentLocation is enabled you need to provide the Google API key. |
| `isFocus`         | _boolean_  |  A boolean value which indicates if dropdown menus is open. |


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

MIT Licensed. Copyright (c) George Bardi 2019.
