
import './App.css';
import { NoteList } from './components/NoteList';
import { NotesList } from './components/NotesList';


function App() {
  return (
    <div className="App">
      {/* react 17v - Everything as Urgent Update */}
      {/* <NoteList/> */}

      {/* react 18v - Concurrent rendering  */}
      <NotesList />
    </div>
  );
}

export default App;
