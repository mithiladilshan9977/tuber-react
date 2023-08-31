import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

interface UserFormProps {
  formData: {
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    termsAndConditions: boolean;
    // Add other properties of formData here
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    termsAndConditions: boolean;
    // Add other properties of formData here
  }>>;
}

export function UserForm({ formData, setFormData }: UserFormProps) {

  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber);

   const handlePhoneChange = (value) => {
      // Handle the phone number and country change
      setPhoneNumber(value);
      setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
      }));// Update the phoneNumber state
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
      <div className="titileholder">
        <span className="createaccounttitle">Create your tuber Account</span>
      </div>

  
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

    <div className="craeetpasswordholder">
        <span className="createPasswordText">Create password</span>
        </div>

         
         <input 
            type="password" 
            placeholder="Password" 
            className="inputfields" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}/>
            
         <input 
            type="password" 
            placeholder="Confirm password" 
            className="inputfields" 
            name="confirmPassword"
            value={formData.confirmPassword} 
            onChange={handleInputChange}
        />
       


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

























// export function UserForm({ formData, setFormData }){

//    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { name, value, type, checked } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: type === "checkbox" ? checked : value,
//       }));

//     };

//     return (
//          < >
//         <div className="titileholder">
//         <span className="createaccounttitle">Create your tuber account</span>
//         </div>
         
//         <input
//             autoFocus
//             required
//             type="text"
//             placeholder="First name"
//             className="inputfields"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//          />

//          <input
//             autoFocus
//             required
//             type="text"
//             placeholder="Last name"
//             className="inputfields"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//          />

//          <input
//             required
//             type="email"
//             placeholder="Email"
//             className="inputfields"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//          />

//          <input
//             required
//             type="number"
//             placeholder="Phone number"
//             className="inputfields"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//          />

//          <div className="checkboxholder">
//             <input
//                type="checkbox"
//                className="checkbox"
//                name="termsAndConditions"
//                checked={formData.termsAndConditions}
//                onChange={handleInputChange}
//             />{" "}
//             Terms and conditions
//          </div>
         

//         </>
//    )
// }


 