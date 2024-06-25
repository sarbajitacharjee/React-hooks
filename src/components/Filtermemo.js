import React, { useState, useMemo } from 'react';

// Sample data
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
];

// Filter function
const filterItems = (items, searchTerm) => {
  console.log('Filtering items...');
  return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

const ItemList = ({ items, searchTerm }) => {
  const filteredItems = useMemo(() => filterItems(items, searchTerm), [items, searchTerm]);

  return (
    <ul className="list-disc list-inside mt-4">
      {filteredItems.map(item => (
        <li key={item.id} className="p-2 bg-gray-100 rounded-md mb-2">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4 w-full h-96 flex flex-col justify-center items-center mx-auto bg-orange-500">
    <h1 className='text-xl'>UNDERSTAND MEMO HOOK in FILTER</h1>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-96 p-2 border border-gray-300 rounded-md mb-4"
      />
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
