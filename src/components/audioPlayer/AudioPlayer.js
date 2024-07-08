import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.css'; // Import your CSS file for styling

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null); // Reference to the audio element

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play(); // Play audio
    } else {
      audioRef.current.pause(); // Pause audio
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  const toggleVolume = () => {
    if (!isMute) {
        audioRef.current.volume = 0; // Play audio
    } else {
        audioRef.current.volume = 1; // Pause audio
    }
    setIsMute(!isMute); // Toggle play/pause state
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime); // Update current time as audio plays
    setDuration(e.target.duration); // Update duration of the audio
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration; // Calculate seek time based on input value
    setCurrentTime(seekTime); // Update current time for smoother seeking
    audioRef.current.currentTime = seekTime; // Seek to the calculated time in audio
  };

  return (
    <div className="audio-player">
      <div className="audio-controls">
        <button className="play-btn" onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <input
          type="range"
          className="seek-bar"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
        <div className="google-translate" onClick={toggleVolume}>
          <FontAwesomeIcon icon={isMute ? faVolumeMute : faVolumeUp} />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)} // Pause when audio ends
      />
    </div>
  );
};

export default AudioPlayer;