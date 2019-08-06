
### Installation

```
npm i react-find --save
```

### Usage

```
import React from 'react'
import Search from 'react-find'

const App = () => {
  data = [
    '135 Madison Avenue',
    '302 5th Avenue',
    '135 Madison Avenue',
    '49 West 45th Street',
    '350 Park Avenue '
  ]
    return (
      <Search
        placeholder="Find your next place"
        data={data}
        onChange={onChange}
      />
    )
}
```

## Props

- `placeholder` - The placeholder text for the input box.
- `data` - An array of data which acts as the source of data for the dropdown. This prop is required.
- `onChange` - A function which acts as a callback when the input value is changed.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

MIT Licensed. Copyright (c) George Bardi 2019.
