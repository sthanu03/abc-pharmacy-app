// ItemsPage.js
import React from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import './ItemPage.css';


const ItemsPage = () => {
  // Define functions to handle item updates and deletions
  const handleItemUpdate = (selectedItem) => {
    // Implement the logic for updating the selected item
    console.log('Update item:', selectedItem);
  };

  const handleItemDelete = (itemName) => {
    // Implement the logic for deleting the item with the given name
    console.log('Delete item:', itemName);
  };

  return (
    <div className="items-container">
      <h2>Add New Items</h2>
      <div className="form-list-container">
        <div className="form-container">
        <ItemForm />
      <div className="item-list-container">
      <ItemList onItemUpdate={handleItemUpdate} onItemDelete={handleItemDelete} />
      </div>
    
        </div>
      </div>
      </div>
  );
};

export default ItemsPage;
