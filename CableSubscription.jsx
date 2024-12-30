// src/pages/CableSubscription.jsx
import React, { useState } from 'react';
import axios from 'axios';

function CableSubscription() {
  const [formData, setFormData] = useState({
    provider: '',
    package: '',
    decoderNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/vtu/cable', formData);
      // Handle successful response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="provider" value={formData.provider} onChange={handleChange} required>
        <option value="">Select Provider</option>
        <option value="DSTV">DSTV</option>
        <option value="GOTV">GOTV</option>
        <option value="Startimes">Startimes</option>
      </select>
      <select name="package" value={formData.package} onChange={handleChange} required>
        <option value="">Select Package</option>
        {/* Populate with available packages */}
      </select>
      <input
        type="text"
        name="decoderNumber"
        placeholder="Decoder Number"
        value={formData.decoderNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default CableSubscription;
