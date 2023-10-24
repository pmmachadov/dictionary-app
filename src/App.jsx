import React, { useState } from 'react';

const Dictionary = () => {
  const [words, setWords] = useState([
    { word: 'apple', definition: 'A round, red or green fruit that is eaten as food.' },
    { word: 'banana', definition: 'A long, yellow fruit that is eaten as food.' },
    { word: 'orange', definition: 'A round, orange fruit that is eaten as food.' },
  ]);

  const handleSearch = (word) => {
    const filteredWords = words.filter((w) => w.word === word);
    setWords(filteredWords);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word..."
        value={ words[0].word }
        onChange={ (e) => handleSearch(e.target.value) }
      />
      <button onClick={ handleSearch }>Search</button>
      <ul>
        { words.map((w) => (
          <li key={ w.word }>{ w.word }: { w.definition }</li>
        )) }
      </ul>
    </div>
  );
};

export default Dictionary;
