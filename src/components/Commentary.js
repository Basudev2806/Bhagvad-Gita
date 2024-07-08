import React from 'react';
import commentaryData from '../data/commentary.json';

const Commentary = ({ verseId }) => {
  const verseCommentary = commentaryData[verseId];

  return (
    <div>
      <h2>Commentary</h2>
      <p>{verseCommentary}</p>
    </div>
  );
};

export default Commentary;
