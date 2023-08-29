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
            name="ConfirmPassword"
            onChange={handleInputChange}
            value={formData.ConfirmPassword}
        />


        </>
    )
}