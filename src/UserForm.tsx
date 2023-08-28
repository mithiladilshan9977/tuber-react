export function UserForm({ formData, setFormData }){

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));

    };

    return (
         < >
        <div className="titileholder">
        <span className="createaccounttitle">Create your tuber account</span>
        </div>
         
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
            autoFocus
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

         <input
            required
            type="number"
            placeholder="Phone number"
            className="inputfields"
            name="phoneNumber"
            value={formData.phoneNumber}
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
   )
}


// import { FormWrapper } from "./FormWrapper";

// export function UserForm(){
//     return (
//         <FormWrapper title="User Details">
//         <label>First name</label>
//         <input  autoFocus required type="text" />

//         <label>Last name</label>
//         <input  autoFocus required type="text" />

//         <label>Age</label>
//         <input   min={1} required type="number" />
//         </FormWrapper>
//    )
// }