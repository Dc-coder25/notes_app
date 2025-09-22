import NoteItem from './NoteItem';
import '../styles/NoteList.css';

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
