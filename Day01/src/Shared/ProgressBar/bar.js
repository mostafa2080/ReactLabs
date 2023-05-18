import React from 'react';
import './bar.css';

const ProgressBar = ({ label, progress }) => (
  <div className="progress-bar">
    <div className="progress-bar__label">{label}</div>
    <div className="progress-bar__bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default ProgressBar;
    