import React from 'react';

const TextInput = ({ content, setContent }) => (
  <div>
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter text here"
      rows="10"
      cols="50"
    />
  </div>
);

export default TextInput;
