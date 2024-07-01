import React from 'react';

const SummaryDisplay = ({ original, summary }) => (
  <div>
    <h2>Original Text</h2>
    <p>{original}</p>
    <h2>Summary</h2>
    <p>{summary}</p>
  </div>
);

export default SummaryDisplay;
