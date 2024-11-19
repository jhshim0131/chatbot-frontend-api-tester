import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const callApi = () => {
    fetch('/call-api')
        .then(response => response.json())
        .then(data => {
          setResult(`Result: ${JSON.stringify(data)}`);
          setError('');
        })
        .catch(err => {
          setError(`Error: ${err.message}`);
          setResult('');
        });
  };

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>API Trigger Example</h1>
        <button onClick={callApi}>Call API</button>
        <p>{result || error}</p>
      </div>
  );
}

export default App;
