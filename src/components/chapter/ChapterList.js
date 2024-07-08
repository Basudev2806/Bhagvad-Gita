import React, { useState } from "react";
import chaptersData from "../../data/chapters.json";
import RandomVerse from '../randomVerse/RandomVerse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./ChapterList.css";

const ChapterList = () => {
  const navigate = useNavigate();

  const [expandedChapter, setExpandedChapter] = useState(null);

  const toggleExpand = (chapterId) => {
    if (expandedChapter === chapterId) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(chapterId);
    }
  };

  const goToChapterDetails = (id) => {
    navigate(`/chapter/${id}`);
  };

  return (
    <div className="chapter-list-container">
      <RandomVerse />
      <h2>Chapters</h2>
      <ul className="chapter-list">
        {chaptersData.map((chapter) => (
          <li key={chapter.id} className={`chapter-item`}>
            <div className="chapter-link">
              <div className="chapter-box" onClick={() => toggleExpand(chapter.id)}>
                <div className="row">
                  <div className="chapter-number">
                    <p>Chapter {chapter.chapter_number}</p>
                  </div>
                  <div className="chapter-name">{chapter.name}</div>
                  <div className="chapter-name-meaning">{chapter.name_meaning}</div>
                </div>
                <FontAwesomeIcon icon={faCaretDown} className={`arrow-icon`} />
              </div>
              <div className={`chapter-details expanded-content ${expandedChapter === chapter.id ? 'visible' : ''}`}>
                <p>{chapter.chapter_summary}</p>
                <p>{chapter.chapter_summary_hindi}</p>
                <div
                  className="see-all-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToChapterDetails(chapter.id);
                  }}
                >
                  See All
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;