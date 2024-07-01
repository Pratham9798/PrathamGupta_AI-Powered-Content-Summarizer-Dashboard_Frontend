

import axios from 'axios';

const scrapeContent = async (url) => {
  const { data } = await axios.get(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  const paragraphs = doc.querySelectorAll('p, article');
  let content = '';
  paragraphs.forEach(p => content += p.textContent + ' ');
  return content;
};

export default scrapeContent;

