import React, { useState, useTransition } from "react";

interface IDataItem {
  name: string;
  id: number;
}

const data: IDataItem[] = [
  {
    name: "js",
    id: 1,
  },
  {
    name: "react",
    id: 2,
  },
  {
    name: "node",
    id: 3,
  },
  {
    name: "graphql",
    id: 4,
  },
];

export function NotesList(): JSX.Element {

  const [filterValue, setFilterValue] = useState("");
  const [filterInput, setFilterInput] = useState("");


  const [isPanding, startTransition] = useTransition()

  const filteredData: IDataItem[] = data.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    setFilterValue(e.target.value);

    startTransition(()=> {
      // Giving back the control to the browser after every frame
      setFilterInput(e.target.value);
    })
  };

  return (
    <>
      <input
        type="text"
        value={filterInput}
        name="filter"
        onChange={handleFilterChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
