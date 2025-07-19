// import React, { useState } from 'react';

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       onSearch(query);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: '1rem 4%' }}>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for a movie..."
//         style={{ padding: '10px', width: '100%', maxWidth: '500px' }}
//       />
//     </form>
//   );
// }

// export default SearchBar;









import React, { useState } from 'react';
import searchIcon from '../../assets/search_icon.svg'; // Use correct path to your icon

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div style={{ padding: '1rem 4%', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        onClick={() => setShowInput(!showInput)}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '6px'
        }}
      >
        <img src={searchIcon} alt="Search" style={{ width: '24px' }} />
      </button>

      {showInput && (
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '10px 14px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </form>
      )}
    </div>
  );
}

export default SearchBar;

