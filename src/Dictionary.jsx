import React, { useState } from 'react';
import wordsData from './Pages/words';

const Dictionary = () => {
  const [filteredWords, setFilteredWords] = useState(wordsData);
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = (word) => {
    setSearchWord(word);
    const filtered = wordsData.filter((w) => w.word.includes(word));
    setFilteredWords(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word..."
        value={ searchWord }
        onChange={ (e) => handleSearch(e.target.value) }
      />
      <button onClick={ () => handleSearch(searchWord) }>Search</button>
      <ul>
        { filteredWords.map((w) => (
          <li key={ w.word }>{ w.word }: { w.definition }</li>
        )) }
      </ul>

    </div>
  );
};

export default Dictionary;
