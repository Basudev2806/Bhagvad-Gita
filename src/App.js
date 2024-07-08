import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChapterList from './components/chapter/ChapterList';
import Verse from './components/verse/Verse';
import TranslatedVerse from './components/translate/TranslatedVerse';
import Commentary from './components/Commentary';
import Navbar from './components/navbar/navbar';
import HanumanChalisa from './components/hanuman_chalisa/HanumanChalisa';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<ChapterList />} />
            <Route path="/chapter/:id" element={<Verse />} />
            <Route path="/verse/:id" element={<TranslatedVerse />} />
            <Route path="/hanuman-chalisa" element={<HanumanChalisa />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Bhagvad Gita</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
