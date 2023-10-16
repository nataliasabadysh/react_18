import React, { useState } from "react";

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

export function NoteList(): JSX.Element {
  const [filter, setFilter] = useState<string>("");

  const filteredData: IDataItem[] = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={filter}
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
