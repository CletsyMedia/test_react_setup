import { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "Swift",
    "Go",
    "TypeScript",
    "PHP",
    "Kotlin",
    "Rust",
    "Scala",
    "Perl",
    "Dart",
    "Matlab",
    "SQL",
    "Assembly",
    "HTML/CSS"
  ];

  // Search
  const searchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterItems(searchTerm);
  }

  // Filter
  const filterItems = (searchTerm) => {
    const filtered = languages.filter((language) =>
      language.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Programming Languages</h1>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
          placeholder="Search for a language..."
          value={searchTerm}
          onChange={searchChange}
        />
        <ul className="list-disc pl-4">
          {filteredItems.map((language, index) => (
            <li key={index} className="text-lg">{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchFilter;
