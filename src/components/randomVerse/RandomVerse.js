import React from 'react';
import versesData from '../../data/verse.json';
import './RandomVerse.css';

const RandomVerse = () => {
  const randomIndex = Math.floor(Math.random() * versesData.length);
  const randomVerse = versesData[randomIndex];

  return (
    <div className="random-verse-container">
      <div className="verse-box">
        <p className="verse-text">{randomVerse.text}</p>
      </div>
    </div>
  );
};

export default RandomVerse;
