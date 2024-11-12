import React from 'react';

const ConfirmDelete = ({ onConfirm, onCancel }) => (
  <div className="confirm-delete">
    <p>Are you sure you want to delete this flashcard?</p>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onCancel}>No</button>
  </div>
);

export default ConfirmDelete;
