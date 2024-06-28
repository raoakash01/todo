import React, { useState } from 'react';
import Fuse from 'fuse.js';

const Autocomplete = ({ suggestions, onInputChange }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Initialize Fuse instance for fuzzy searching
  const fuse = new Fuse(suggestions, {
    keys: ['label'],
    threshold: 0.3, // Adjust this for more or less strict matching
  });

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Perform fuzzy search based on input value
    const results = fuse.search(inputValue);
    const filtered = results.map((result) => result.item);

    setFilteredSuggestions(filtered);

    // Pass the input value to the parent component
    onInputChange(inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the input value to the selected suggestion
    setInputValue(suggestion.label);
    setFilteredSuggestions([]);

    // Pass the selected suggestion to the parent component
    onInputChange(suggestion.label);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a task..."
      />
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
