import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onEdit, onDelete }) => {
  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
          onEdit={() => onEdit(flashcard)}
          onDelete={() => onDelete(flashcard.id)}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
