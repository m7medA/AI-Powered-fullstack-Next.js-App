'use client';

import { askQuestion } from '@/app/lib/api';
import { useState } from 'react';

export default function Questions() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const answer = await askQuestion(value);

    setResponse(answer);

    setValue('');
    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Ask a question"
          className="bg-white outline-0 border border-black/20 px-4 py-2 text-lg rounded-lg mr-2"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-lg text-lg cursor-pointer text-white"
        >
          Ask
        </button>
      </form>
      {loading && <div>...loading</div>}
      {response && <div>{response}</div>}
    </div>
  );
}
