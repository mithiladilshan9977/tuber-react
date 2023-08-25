
export function UserForm(){
    return (
        < >
        <div className="titileholder">
        <span className="createaccounttitle">Create your tuber account</span>
        </div>
         
        <input  autoFocus required type="text" placeholder="First name" className="inputfields"/>

 
        <input  autoFocus required type="text" placeholder="Last name"  className="inputfields"/>

  
        <input    required type="email" placeholder="Email" className="inputfields"/>

        <input    required type="number" placeholder="Phone number" className="inputfields"/>
           <div className="checkboxholder">
           <input type="checkbox" name="" id="" className="checkbox" /> Terms and conditions
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