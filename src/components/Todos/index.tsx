

import { useSyncExternalStore } from 'react';

type Todo = {
  id: number;
  text: string;
};

let nextId = 0;
let todos: Todo[] = [{ id: nextId++, text: 'Todo #1' }];
type Listener = () => void;
let listeners: Listener[] = [];

export const storeApi = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
    emitChange();
  },
  subscribe(listener: Listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

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