import React, { useState } from 'react';
import './DataSubscription.css';

function DataSubscription() {
  const [formData, setFormData] = useState({
    provider: '',
    plan: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.provider) {
      newErrors.provider = 'Provider is required';
      isValid = false;
    }

    if (!formData.plan) {
      newErrors.plan = 'Plan is required';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="data-subscription">
      <h2>Data Subscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Provider:
          <select
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            required
          >
            <option value="">Select Provider</option>
            <option value="MTN">MTN</option>
            <option value="Airtel">Airtel</option>
            <option value="Glo">Glo</option>
            <option value="9mobile">9mobile</option>
          </select>
          {errors.provider && <span className="error">{errors.provider}</span>}
        </label>
        <label>
          Plan:
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
          >
            <option value="">Select Plan</option>
            {/* Populate with available plans */}
          </select>
          {errors.plan && <span className="error">{errors.plan}</span>}
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default DataSubscription;
;
