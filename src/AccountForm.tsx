 export function AccountForm({ formData, setFormData }){

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value} = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    };

    return (
       
    <>
      <div className="titileholder">
        <span className="createaccounttitle">Vehicle information</span>
        </div>
        
          <select 
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            className="inputfields">

            <option value="">Select your vehicle type</option>
            <option value="Toyota">Toyota</option>
            <option value="">Lambo</option>
            <option value="">Lambo lanka</option>
            <option value="">Sri Lambo</option>
         </select>



         <select 
          name="vehicleMake"
          value={formData.vehicleMake}
          onChange={handleInputChange}
          className="inputfields">

            <option value="">Vehical make</option>
            <option value="">type2</option>
            <option value="">India</option>
            <option value="">Sri lanka</option>
            <option value="">Sri lanka</option>
         </select>


        <input  
          autoFocus 
          required 
          type="text" 
          placeholder="Vehicle model" 
          className="inputfields"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleInputChange}
        />


        <input  
          autoFocus 
          required 
          type="text" 
          placeholder="Year" 
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          className="inputfields"
        />


         <input 
          autoFocus 
          required 
          type="text" 
          placeholder="Enter your vehicle plate Number" 
          className="inputfields"
          name="vehiclePlate"
          value={formData.vehiclePlate}
          onChange={handleInputChange}
         />


        </>

    )
}