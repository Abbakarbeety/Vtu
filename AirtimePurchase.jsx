// src/pages/AirtimePurchase.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AirtimePurchase() {
  const [formData, setFormData] = useState({
    provider: '',
    amount: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/avtu/airtime', formData);
      // Handle successful response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="provider" value={formData.provider} onChange={handleChange} required>
        <option value="">Select Provider</option>
        <option value="MTN">MTN</option>
        <option value="Airtel">Airtel</option>
        <option value="Glo">Glo</option>
        <option value="9mobile">9mobile</option>
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Recipient Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Purchase</button>
    </form>
  );
}

export default AirtimePurchase;
