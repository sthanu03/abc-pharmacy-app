// InvoiceForm.js
import React, { useState } from 'react';

const InvoiceForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues ? initialValues.name : '');
  const [mobileNo, setMobileNo] = useState(initialValues ? initialValues.mobileNo : '');
  const [email, setEmail] = useState(initialValues ? initialValues.email : '');
  const [address, setAddress] = useState(initialValues ? initialValues.address : '');
  const [billingType, setBillingType] = useState(initialValues ? initialValues.billingType : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !mobileNo.trim() || !email.trim() || !address.trim() || !billingType.trim()) {
      setError('All fields are required');
      return;
    }

    // Additional validation logic if needed
    // ...

    // Call the onSubmit callback with the form data
    onSubmit({ name, mobileNo, email, address, billingType });
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
        Mobile No:
        <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Billing Type:
        <input type="text" value={billingType} onChange={(e) => setBillingType(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InvoiceForm;
