// ItemList.js
import React, { useState, useEffect } from 'react';


const ItemList = ({ onItemUpdate, onItemDelete }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your API or database
    // Update the URL with your actual API endpoint
    fetch('http://localhost:8080/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  const handleUpdateClick = (item) => {
    // Pass the selected item to the parent component for handling update
    onItemUpdate(item);
  };

  const handleDeleteClick = (itemName) => {
    // Pass the item name to the parent component for handling delete
    onItemDelete(itemName);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.unitPrice} - {item.itemCategory}{' '}
            <button onClick={() => handleUpdateClick(item)}>Update</button>
            <button onClick={() => handleDeleteClick(item.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
