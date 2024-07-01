import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <h2>Summarization History</h2>
      {history.length === 0 ? (
        <p>No history available</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <div>
                <strong>Original:</strong>
                <p>{item.original}</p>
              </div>
              <div>
                <strong>Summary:</strong>
                <p>{item.summary}</p>
              </div>
              <div>
                <strong>Length:</strong>
                <p>{item.length}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
