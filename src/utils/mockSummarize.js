const mockSummarize = (text, length) => {
    const summaries = {
      short: 'This is a short summary.',
      medium: 'This is a medium summary, providing more details.',
      long: 'This is a long summary, providing extensive details about the content.',
    };
    return summaries[length];
  };
  
  export default mockSummarize;
  