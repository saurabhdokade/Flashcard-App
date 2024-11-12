import React, { useState } from 'react';

const Flashcard = ({ flashcard, onEdit, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
      <h3>{flashcard.question}</h3>
      {showAnswer && <p>{flashcard.answer}</p>}
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Flashcard;
