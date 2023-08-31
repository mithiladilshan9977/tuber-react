import React, { useState, useEffect } from 'react';

export function AddressForm({ formData, setFormData }){

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
  
      };


    return (
        < >
    <input
        autoFocus
        required
        type="text"
        placeholder="First name"
        className={`inputfields ${formData.firstName ? '' : 'inputFailedValidation'}`}
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />

      <input
        required
        type="text"
        placeholder="Last name"
        className="inputfields"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
        <input
            autoFocus
            required
            type="date"
            placeholder="Date of birth"
            className="inputfields"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
        />

        <input
            autoFocus
            required
            type="text"
            placeholder="Driver license No"
            className="inputfields"
            name="driverLicenseNo"
            value={formData.driverLicenseNo}
            onChange={handleInputChange}
        />

        <select
            name="city"
            id=""
            className="inputfields"
            value={formData.city}
            onChange={handleInputChange}
         >
            <option value="">City you'll drive in</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="India">India</option>
        </select>

        </>
    )
}