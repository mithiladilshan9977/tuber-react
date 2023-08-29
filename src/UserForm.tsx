


import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

interface UserFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    termsAndConditions: boolean;
    // Add other properties of formData here
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    termsAndConditions: boolean;
    // Add other properties of formData here
  }>>;
}

export function UserForm({ formData, setFormData }: UserFormProps) {
 

   const [phoneNumber, setPhoneNumber] = useState('');
   const handlePhoneChange = (value, country) => {
      // Handle the phone number and country change
      setPhoneNumber(value); // Update the phoneNumber state
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      
     

      <input
        autoFocus
        required
        type="text"
        placeholder="First name"
        className="inputfields"
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
        required
        type="email"
        placeholder="Email"
        className="inputfields"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      {/* <input
        required
        type="number"
        placeholder="Phone number"
        className="inputfields"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      /> */}
      <div className="container">
      <div className="phoneInputRow">
        <PhoneInput
          inputProps={{
            name: 'phoneNumber',
            required: true,
            placeholder: 'Phone number',
            className: 'phoneInputField',
          }}
          value={phoneNumber}
          onChange={handlePhoneChange}
          countryCodeEditable={false}
        />
 
      </div>
    </div>
       


      <div className="checkboxholder">
        <input
          type="checkbox"
          className="checkbox"
          name="termsAndConditions"
          checked={formData.termsAndConditions}
          onChange={handleInputChange}
        />{" "}
        Terms and conditions
      </div>
    </>
  );
}
 