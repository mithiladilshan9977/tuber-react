export function TextDetails({ formData, setFormData }){

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value, type, } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name] : value,
        }));
  
      };

    return(
        <>

    <div className="titileholder">
        
    </div>



    <input  
        autoFocus 
        required 
        type="text" 
        placeholder="ABN" 
        className="inputfields"
        name="ABN"
        value={formData.ABN}
        onChange={handleInputChange}
    />



    <input  
        autoFocus 
        required 
        type="text" 
        placeholder="business name" 
        className="inputfields"
        name="businessName"
        value={formData.businessName}
        onChange={handleInputChange}
    />




    <select 
        name="GST"
        value={formData.GST}
        onChange={handleInputChange}
        className="inputfields"
    >
        <option value="">GST retistration status</option>
        <option value="">type2</option>
        <option value="india">India</option>
        <option value="">Sri lanka</option>
        <option value="">Sri lanka</option>
    </select>


   <input  
        autoFocus 
        required 
        type="text" 
        placeholder="Street address" 
        className="inputfields"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
   />

   <div className="section1">

    <input 
        type="text" 
        placeholder="Suberb" 
        className="inputfields"
        name="suberb"
        value={formData.suberb}
        onChange={handleInputChange} 
    />

    <input 
        type="text" 
        placeholder="Posetl code" 
        className="inputfields"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleInputChange}
    />
   </div>

    <div className="section2">
     
        <select 
            name="state"
            value={formData.state}
            onChange={handleInputChange}  
            className="inputfields" 
        >

            <option value="">State</option>
            <option value="">type2</option>
            <option value="1">India</option>
            <option value="">Sri lanka</option>
            <option value="">Sri lanka</option>
        </select>


        <select 
            name="country"
            value={formData.country}
            onChange={handleInputChange} 
            className="inputfields">

            <option value="">Country</option>
                <option value="">type2</option>
                <option value="1">India</option>
                <option value="">Sri lanka</option>
                <option value="">Sri lanka</option>
        </select>

   </div>

</>
    )
}