
#  react 18v examples
[Doc](https://react.dev/)
# useTransition

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

# useEffect 

- we use for synchronization with activity effects 
- action effects happen outside of rendering 


# useSyncExternalStore
- 

```js
import { useSyncExternalStore } from 'react';

export function Todos() {
  const todos = useSyncExternalStore(storeApi.subscribe, storeApi.getSnapshot);

  return (
    <>
      <button onClick={() => storeApi.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
```

# use

excited about it ;)

[doc](https://react.dev/reference/react/use)



