import '../styles/NoteItem.css';

function NoteItem({ note }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="tags">
        {note.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}

export default NoteItem;
