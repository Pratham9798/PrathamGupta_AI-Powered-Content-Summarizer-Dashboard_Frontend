import React, { useState } from 'react';
import scrapeContent from '../utils/scrapeContent';

const UrlInput = ({ setContent, setError }) => {
  const [url, setUrl] = useState('');

  const handleScrape = async () => {
    setError('');
    try {
      const content = await scrapeContent(url);
      setContent(content);
    } catch (e) {
      setError('Failed to scrape content');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleScrape}>Scrape</button>
    </div>
  );
};

export default UrlInput;
