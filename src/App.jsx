import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (note) => {
    setNotes(prev => [...prev, note]);
  };

  return (
    <div className="app">
      <h1>Mes Notes</h1>
      <NoteForm onAdd={handleAddNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
