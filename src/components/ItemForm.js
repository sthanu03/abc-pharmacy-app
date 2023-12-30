// ItemForm.js
import React, { useState } from 'react';
import './ItemForm.css';


const ItemForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues ? initialValues.name : '');
  const [unitPrice, setUnitPrice] = useState(initialValues ? initialValues.unitPrice : '');
  const [itemCategory, setItemCategory] = useState(initialValues ? initialValues.itemCategory : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !unitPrice.trim() || !itemCategory.trim()) {
      setError('All fields are required');
      return;
    }

    // Additional validation logic if needed
    // ...

    // Call the onSubmit callback with the form data
    onSubmit({ name, unitPrice, itemCategory });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Unit Price:
        <input type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Item Category:
        <input type="text" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Now</button>
    </form>
  );
};

export default ItemForm;
