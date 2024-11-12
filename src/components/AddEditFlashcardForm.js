import React, { useState, useEffect } from 'react';
import './AddEditFlashcardForm.css';

const AddEditFlashcardForm = ({ onSave, flashcard = null }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (flashcard) {
      setQuestion(flashcard.question);
      setAnswer(flashcard.answer);
    }
  }, [flashcard]);

  const handleSave = () => {
    if (!question || !answer) {
      setError('Both fields are required');
      return;
    }
    onSave({ id: flashcard ? flashcard.id : Date.now(), question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h2>{flashcard ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <textarea
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddEditFlashcardForm;
