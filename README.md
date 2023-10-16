
#  react 18v useTransition

- startTransition - Giving back the control to the browser after every frame

```js
export function NotesList(): JSX.Element {

  // we splitted the value into two
  const [filterValue, setFilterValue] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const [isPanding, startTransition] = useTransition()

  const filteredData: IDataItem[] = data.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );


  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);

    startTransition(()=> {
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


```



