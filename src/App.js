import React, { useState } from 'react';
import './App.css';  // Import the CSS file
import FlashcardList from './components/FlashcardList';
import AddEditFlashcardForm from './components/AddEditFlashcardForm';
import ConfirmDelete from './components/ConfirmDelete';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [flashcardToDelete, setFlashcardToDelete] = useState(null);

  const handleAddEdit = (flashcard) => {
    setShowForm(true);
    setCurrentFlashcard(flashcard || null);
  };

  const handleSave = (flashcard) => {
    if (currentFlashcard) {
      setFlashcards(flashcards.map((f) => (f.id === flashcard.id ? flashcard : f)));
    } else {
      setFlashcards([...flashcards, flashcard]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setConfirmDelete(true);
    setFlashcardToDelete(id);
  };

  const confirmDeleteFlashcard = () => {
    setFlashcards(flashcards.filter((f) => f.id !== flashcardToDelete));
    setConfirmDelete(false);
    setFlashcardToDelete(null);
  };

  return (
    <div id="root"> {/* Root div with applied styling */}
      <h1>Flashcard App</h1>
      <button onClick={() => handleAddEdit(null)}>Add Flashcard</button>
      {showForm && (
        <AddEditFlashcardForm
          onSave={handleSave}
          flashcard={currentFlashcard}
        />
      )}
      <FlashcardList flashcards={flashcards} onEdit={handleAddEdit} onDelete={handleDelete} />
      {confirmDelete && (
        <ConfirmDelete
          onConfirm={confirmDeleteFlashcard}
          onCancel={() => setConfirmDelete(false)}
        />
      )}
    </div>
  );
};

export default App;
