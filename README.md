
### Installation

```
npm i react-find --save
```

### Usage

```
import React { useState } from 'react'
import Search from 'react-find'

 let initialData = [
  'Upper Manhattan',
  'Marble Hill',
  'Inwood',
  'Washington Heights',
  'Central Harlem'
  ];

const App = () => {
  const [data, setData] = useState(initialData);

  const handleSearch = e => {
    const query = e.target.value.toLowerCase();

    axios.get(`${API}/data?name=${query}`).then(response => {
      if (response.status === 200) {
        setData(response.data.content);
      }
    })
  };
    return (
      <Search
        placeholder="Find your next place..."
        data={data}
        onChange={handleSearch}
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
