import React, { useEffect, useState, useTransition } from "react";
import { fetchBreeds } from "../../api";

interface IDog {
  name: string;
  id: number;
}

export function NotesList(): JSX.Element {

  const [filterValue, setFilterValue] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const [dogs, setDogs] = useState<IDog[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const [isPanding, startTransition] = useTransition()

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        const fetchedBreeds = await fetchBreeds();
        setDogs(fetchedBreeds);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    }

    getBreeds();
  }, []);


  const filteredDogs: IDog[] = dogs.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);

    startTransition(() => {
      setFilterInput(value);
    });
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
        {filteredDogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul>
      {error && <>{error}</>}
    </>
  );
}
