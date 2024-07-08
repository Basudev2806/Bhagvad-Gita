import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import versesData from '../../data/verse.json';
import translationsData from '../../data/translation.json';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './TranslatedVerse.css';

const TranslatedVerse = () => {
  const { id: verseId } = useParams();
  const verseIdNumber = parseInt(verseId, 10);
  const selectedChapter = versesData.find(verse => verse.verse_id === verseIdNumber);

  const [expandedTranslation, setExpandedTranslation] = useState(null);

  const audioUrl = `https://github.com/WirelessAlien/gita/raw/main/data/verse_recitation/${selectedChapter.chapter_number}/${selectedChapter.verse_number}.mp3`;

  const verseTranslations = {};
  translationsData.forEach(translation => {
    const verseId = translation.verse_id;
    if (!verseTranslations[verseId]) {
      verseTranslations[verseId] = [];
    }
    verseTranslations[verseId].push(translation);
  });

  const toggleExpand = (translationId) => {
    if (expandedTranslation === translationId) {
      setExpandedTranslation(null);
    } else {
      setExpandedTranslation(translationId);
    }
  };

  return (
    <div className="verse-container">
        <h2>{selectedChapter.title}</h2>
        <p className='verse'>{selectedChapter.text}</p>
        <div className="box">
                <h4>
                    Transliteration :
                </h4>
                <p><strong>{selectedChapter.transliteration}</strong></p>
        </div>
        <div className="box">
                <h4>
                    Word meanings :
                </h4>
                <p><strong>{selectedChapter.word_meanings}</strong></p>
        </div>
        <AudioPlayer audioUrl={audioUrl} />
        <div className="verses">
        {verseTranslations[selectedChapter.verse_id] &&
          verseTranslations[selectedChapter.verse_id].map((trans) => (
            <div key={trans.id} className="translation-item">
                <div className="row translation-row" onClick={() => toggleExpand(trans.id)}>
                    <p>
                        <strong>{trans.authorName}</strong>
                    </p>
                    <FontAwesomeIcon icon={faCaretDown} className={`arrow-icons`} />
                </div>
              <div className = {`translation ${expandedTranslation === trans.id ? "visible" : ""}`}
              >
                <ul className="translation-list">
                  <li className="translation-item">
                    <h3>Author:</h3>
                    <p className="author"><h4>{trans.authorName}</h4></p>

                    <h3>Translation:</h3>
                    <p className="description"><h4>{trans.description}</h4></p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TranslatedVerse;
