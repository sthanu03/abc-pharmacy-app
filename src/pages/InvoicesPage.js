// InvoicesPage.js

import React from 'react';
import InvoiceForm from '../components/InvoiceForm';

const InvoicesPage = () => {
  return (
    <div className="invoices-page">
      <h2 align="center">Create Invoices</h2>
      <InvoiceForm />
      {/* Additional components for displaying invoices can be added here */}
    </div>
  );
};

export default InvoicesPage;
