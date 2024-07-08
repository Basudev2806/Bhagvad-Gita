import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import versesData from '../../data/verse.json';
import translationsData from '../../data/translation.json';
import chaptersData from "../../data/chapters.json";
import { useNavigate } from "react-router-dom";
import './Verse.css';

const Verse = () => {
  const navigate = useNavigate();
  
  const { id: chapterId } = useParams();
  const chapterIdNumber = parseInt(chapterId, 10);
  const chapterVerses = versesData.filter(verse => verse.chapter_id === chapterIdNumber);

  const [expandedTranslation, setExpandedTranslation] = useState(null);
  const [showFullSummaryHindi, setShowFullSummaryHindi] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleShowFullSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const toggleShowFullSummaryHindi = () => {
    setShowFullSummaryHindi(!showFullSummaryHindi);
  };

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

  const goToVerseTranslation = (id) => {
    navigate(`/verse/${id}`);
  };

  const selectedChapter = chaptersData.find(chapter => chapter.chapter_number === chapterIdNumber);

  return (
    <div className="verse-container">
      {selectedChapter ? (
        <div>
          <h4 className='header-chapter-number'>{selectedChapter.chapter_number}</h4>
          <h4 className='header-chapter-number'>{selectedChapter.name}</h4>
          <h4 className='header-chapter-number'>{selectedChapter.name_meaning}</h4>
          <p className='header-chapter-summary-hindi'>{showFullSummaryHindi ? selectedChapter.chapter_summary_hindi : selectedChapter.chapter_summary_hindi.slice(0, 150) + '...'}</p>
          <p className='header-chapter-number more' onClick={toggleShowFullSummaryHindi}><strong>{showFullSummaryHindi?"कम देखें":"और देखे"}</strong></p>
          <p className='header-chapter-summary'>{showFullSummary ? selectedChapter.chapter_summary : selectedChapter.chapter_summary.slice(0, 150) + '...'}</p>
          <p className='header-chapter-number more' onClick={toggleShowFullSummary}><strong>{showFullSummary?"see less":"see more"}</strong></p>
        </div>
      ) : (
        <p>Chapter not found</p>
      )}
      {chapterVerses.map(verse => (
        <div key={verse.id} className="verse-container">
          <div className="box"  onClick={() => toggleExpand(verse.id)}>
            <p><strong> {verse.title}</strong></p>
            <div className={`translation expanded-content ${expandedTranslation === verse.id ? 'visible' : ''}`}>
              <h3 className='title'>{verse.text}</h3>
            </div>
            <p className='translate' onClick={(e) => {
                    e.stopPropagation();
                    goToVerseTranslation(verse.id);
                  }}><strong>Translate</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Verse;