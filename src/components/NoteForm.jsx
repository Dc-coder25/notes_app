import { useState } from 'react';
import '../styles/NoteForm.css';

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    });

    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Contenu" />
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (séparés par des virgules)" />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default NoteForm;
