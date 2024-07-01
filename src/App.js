import React, { useState } from 'react';
import TextInput from './components/TextInput';
import UrlInput from './components/UrlInput';
import SummaryDisplay from './components/SummaryDisplay';
import Loading from './components/Loading';
import Error from './components/Error';
import History from './components/History';
import Auth from './components/Auth';
import mockSummarize from './utils/mockSummarize';

const App = () => {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [length, setLength] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSummarize = async () => {
    setLoading(true);
    setError('');
    try {
      const summary = mockSummarize(content, length);
      setSummary(summary);
      setHistory([...history, { original: content, summary, length }]);
    } catch (e) {
      setError('Failed to generate summary');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <Auth setUser={setUser} />;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={() => setUser(null)}>Logout</button>
      <UrlInput setContent={setContent} setError={setError} />
      <TextInput content={content} setContent={setContent} />
      <div>
        <button onClick={handleSummarize}>Summarize</button>
        <select onChange={(e) => setLength(e.target.value)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </div>
      {loading && <Loading />}
      {error && <Error message={error} />}
      <SummaryDisplay original={content} summary={summary} />
      <History history={history} />
    </div>
  );
};

export default App;


